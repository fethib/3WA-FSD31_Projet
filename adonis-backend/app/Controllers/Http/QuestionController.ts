import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import CreateQuestionValidator from "App/Validators/CreateQuestionValidator";

import Question from "App/Models/Question";
import Theme from "App/Models/Theme";

export default class QuestionController {
  //* Index des questions disponibles
  async index({ view }: HttpContextContract) {
    const questions = await Question.all();
    return view.render("question/index", {
      questions,
    });
  }

  //* Création d'une question
  // Page de création
  async new({ view }: HttpContextContract) {
    const themes = await Theme.all();
    themes.sort((a, b) => a.name.localeCompare(b.name));

    return view.render("question/show", {
      status: "new",
      question: new Question(),
      themes,
    });
  }

  // Soumission du formulaire de création
  async create({ request, response, session }: HttpContextContract) {
    const payload = await request.validate(CreateQuestionValidator);
    const question = Question.create(await payload);

    try {
      (await question).save;
      session.flash({ success: "La question a été créée." });
    } catch (error) {
      session.flash({ error: "La question n'a pas pu être créée." });
    }

    return response.redirect().toRoute("dashboard.index");
  }

  //* Modification d'une question
  // Page d'édition
  async show({ view, params, response, session }: HttpContextContract) {
    const question = await Question.find(params.id);
    const themes = await Theme.all();
    themes.sort((a, b) => a.name.localeCompare(b.name));

    if (!question) {
      session.flash({ error: "La question n'existe pas." });
      return response.redirect().toRoute("dashboard.index");
    }

    return view.render("question/show", { question, status: "edit", themes });
  }

  // Soumission du formulaire d'édition
  async update({ request, response, session, params }: HttpContextContract) {
    const question = await Question.findOrFail(params.id);
    const payload = await request.validate(CreateQuestionValidator);

    console.log(question);
    console.log(payload);

    question.merge(await payload);

    try {
      await question.save();
      session.flash({ success: "La question a été modifiée." });
    } catch (error) {
      session.flash({ error: "La question n'a pas pu être modifiée." });
    }

    return response.redirect().toRoute("dashboard.index");
  }

  //* Suppression d'une question
  async delete({ params, session, response }: HttpContextContract) {
    const question = await Question.find(params.id);

    if (!question) {
      session.flash({ error: "La question n'existe pas." });
      return response.redirect().toRoute("dashboard.index");
    }

    try {
      await question.delete();
      session.flash({ success: "La question a été supprimée." });
    } catch (error) {
      session.flash({ error: "La question n'a pas pu être supprimée." });
    }

    return response.redirect().toRoute("dashboard.index");
  }

  //* API Endpoints
  // API Route that returns all questions
  // Optionnaly take a get parameter "theme" to filter questions by theme
  // Multiple themes can be passed as a comma separated list
  async apiIndex({ request }: HttpContextContract) {
    const theme = request.input("theme");
    let questions;

    if (theme) {
      const themes = theme.split(",");

      questions = await Question.query()
        .preload("theme")
        .whereHas("theme", (query) => {
          query.whereIn("slug", themes);
        })
        .limit(10)
        .orderByRaw("random()");
    } else {
      questions = await Question.query()
        .preload("theme")
        .limit(10)
        .orderByRaw("random()");
    }

    const questionsArray = questions.map((question) => {
      return {
        title: question.title,
        correctAnswer: question.correctAnswer,
        invalidAnswer1: question.invalidAnswer1,
        invalidAnswer2: question.invalidAnswer2,
        theme: `${question.theme.emoji} ${question.theme.name}`,
      };
    });

    return questionsArray;
  }
}
