import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Database from "@ioc:Adonis/Lucid/Database";
import Tag from "App/Models/Tag";

export default class TagController {
  //* API Endpoints
  // Renvoie tous les tags
  async apiIndex({ request }: HttpContextContract) {
    const tags = await Tag.all();

    // Tri des tags par ordre alphabétique
    tags.sort((a, b) => a.name.localeCompare(b.name));

    const tagsArray = tags.map((tag) => {
      return {
        id: tag.slug,
        name: tag.name,
      };
    });

    return tagsArray;
  }

  // Renvoie les questions correspondant aux tags passés en paramètre
  async apiShow({}: HttpContextContract) {
    const questions = await Database.rawQuery(
      "SELECT q.title, q.correct_answer, q.invalid_answer1, q.invalid_answer2, themes.name FROM questions q INNER JOIN question_tag qt ON q.id = qt.question_id INNER JOIN tags ON qt.tag_id = tags.id INNER JOIN themes ON q.theme_id = themes.id WHERE tags.slug IN ('tag-g', 'tag-j') GROUP BY q.id HAVING COUNT(DISTINCT tags.slug) = 2"
    );

    return questions;
  }
}
