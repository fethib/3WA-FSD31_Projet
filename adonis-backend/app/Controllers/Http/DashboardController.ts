import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Theme from "App/Models/Theme";
import Question from "App/Models/Question";

export default class DashboardController {
  //* Index du dashboard
  async index({ view }: HttpContextContract) {
    // Thèmes
    const themes = await Theme.all();
    themes.sort((a, b) => a.name.localeCompare(b.name));

    // Questions
    const questions = await Question.all();

    return view.render("dashboard/index", {
      themes,
      questions,
    });
  }
}
