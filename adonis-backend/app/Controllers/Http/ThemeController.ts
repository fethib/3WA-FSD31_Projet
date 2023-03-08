import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Theme from "App/Models/Theme";
import CreateThemeValidator from "App/Validators/CreateThemeValidator";

export default class ThemeController {
  //* Index des thèmes disponibles
  async index({ view }: HttpContextContract) {
    const themes = await Theme.all();

    // Tri des thèmes par ordre alphabétique
    themes.sort((a, b) => a.name.localeCompare(b.name));

    return view.render("theme/index", {
      themes,
    });
  }

  //* Création d'un thème
  // Page de création
  async new({ view }: HttpContextContract) {
    return view.render("theme/show", {
      theme: new Theme(),
      status: "new",
    });
  }

  // Soumission du formulaire de création
  async create({ request, response, session }: HttpContextContract) {
    const payload = await request.validate(CreateThemeValidator);
    const theme = Theme.create(await payload);

    try {
      (await theme).save;
      session.flash({ success: "Le thème a été créé." });
    } catch (error) {
      session.flash({ error: "Le thème n'a pas pu être créé." });
    }

    return response.redirect().toRoute("dashboard.index");
  }

  //* Modification d'un thème
  // Page d'édition
  async show({ view, params, response, session }: HttpContextContract) {
    const theme = await Theme.find(params.id);

    if (!theme) {
      session.flash({ error: "Le thème n'existe pas." });
      return response.redirect().toRoute("dashboard.index");
    }

    return view.render("theme/show", { theme, status: "edit" });
  }

  // Soumission du formulaire d'édition
  async update({ request, response, session, params }: HttpContextContract) {
    const theme = await Theme.findOrFail(params.id);
    const payload = await request.validate(CreateThemeValidator);

    theme.merge(await payload);

    try {
      await theme.save();
      session.flash({ success: "Le thème a été modifié." });
    } catch (error) {
      session.flash({ error: "Le thème n'a pas pu être modifié." });
    }

    return response.redirect().toRoute("dashboard.index");
  }

  //* Suppression d'un thème
  async delete({ params, session, response }: HttpContextContract) {
    const theme = await Theme.find(params.id);

    if (!theme) {
      session.flash({ error: "Le thème n'existe pas." });
      return response.redirect().toRoute("dashboard.index");
    }

    try {
      await theme.delete();
      session.flash({ success: "Le thème a été supprimé." });
    } catch (error) {
      session.flash({ error: "Le thème n'a pas pu être supprimé." });
    }

    return response.redirect().toRoute("dashboard.index");
  }

  //* API Endpoints
  // Renvoie tous les thèmes
  async apiIndex({ response }: HttpContextContract) {
    // Query only the themes that have at least one question
    const themes = await Theme.query()
      .whereHas("questions", (query) => {})
      .preload("questions");

    // Tri des thèmes par ordre alphabétique
    themes.sort((a, b) => a.name.localeCompare(b.name));

    const themesArray = themes.map((theme) => {
      return {
        id: theme.slug,
        name: theme.name,
        emoji: theme.emoji,
      };
    });

    return response.json(themesArray);
  }
}
