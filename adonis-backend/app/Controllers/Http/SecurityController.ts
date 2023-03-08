import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";

export default class SecurityController {
  async index({ view }: HttpContextContract) {
    return view.render("user/login");
  }

  async login({ auth, request, response, session }: HttpContextContract) {
    const email = request.input("email");
    const password = request.input("password");

    try {
      await auth.use("web").attempt(email, password);
      return response.redirect("/dashboard");
    } catch (error) {
      session.flash({ error: "Identifiants incorrects" });
      return response.redirect("/login");
    }
  }
}
