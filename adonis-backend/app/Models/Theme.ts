import { DateTime } from "luxon";
import { BaseModel, column, hasMany, HasMany } from "@ioc:Adonis/Lucid/Orm";
import { slugify } from "@ioc:Adonis/Addons/LucidSlugify";

import Question from "./Question";

export default class Theme extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  @slugify({
    strategy: "dbIncrement",
    fields: ["name"],
    allowUpdates: true,
  })
  public slug: string;

  @column()
  public name: string;

  @column()
  public emoji: string;

  @hasMany(() => Question)
  public questions: HasMany<typeof Question>;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;
}
