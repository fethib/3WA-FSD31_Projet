import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class extends BaseSchema {
  protected tableName = "questions";

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments("id").primary();
      table.string("title").notNullable();
      table.string("correct_answer").notNullable();
      table.string("invalid_answer1").notNullable();
      table.string("invalid_answer2").notNullable();
      table
        .integer("theme_id")
        .unsigned()
        .references("themes.id")
        .onDelete("SET NULL")
        .nullable();

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp("created_at", { useTz: true });
      table.timestamp("updated_at", { useTz: true });
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
