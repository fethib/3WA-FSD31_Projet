import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import User from "App/Models/User";

export default class QuestionController {
  //* Index du site
  async index({ view }: HttpContextContract) {
    return view.render("welcome", {});
  }
}
