/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer''
|
*/

import Route from "@ioc:Adonis/Core/Route";

//* Public routes
Route.get("/", async ({ view }) => {
  return view.render("welcome");
});

Route.get("login", "SecurityController.index");
Route.post("login", "SecurityController.login");

//* Protected routes
Route.group(() => {
  Route.get("dashboard", "DashboardController.index").as("dashboard.index");

  //* QUESTIONS
  // Questions list
  Route.get("dashboard/questions", "QuestionController.index").as(
    "question.index"
  );

  // Question creation
  Route.get("dashboard/questions/new", "QuestionController.new").as(
    "question.new"
  );
  Route.post("dashboard/questions/new", "QuestionController.create");

  // Question edition
  Route.get("dashboard/questions/:id", "QuestionController.show").as(
    "question.show"
  );
  Route.post("dashboard/questions/:id", "QuestionController.update");

  // Question deletion
  Route.delete("dashboard/questions/:id", "QuestionController.delete");

  //* THEMES
  // Themes list
  Route.get("dashboard/themes", "ThemeController.index").as("theme.index");

  // Theme creation
  Route.get("dashboard/themes/new", "ThemeController.new").as("theme.new");
  Route.post("dashboard/themes/new", "ThemeController.create");

  // Theme edition
  Route.get("dashboard/themes/:id", "ThemeController.show").as("theme.show");
  Route.post("dashboard/themes/:id", "ThemeController.update");

  // Theme deletion
  Route.delete("dashboard/themes/:id", "ThemeController.delete");
}).middleware("auth");

//* API
Route.get("api/questions", "QuestionController.apiIndex");
Route.get("api/themes", "ThemeController.apiIndex");
Route.get("api/tags", "TagController.apiIndex");
Route.get("api/questions-tags", "TagController.apiShow");
