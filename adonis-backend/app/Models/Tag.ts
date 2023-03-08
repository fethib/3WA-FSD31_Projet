import { DateTime } from "luxon";
import { BaseModel, column } from "@ioc:Adonis/Lucid/Orm";
import { slugify } from "@ioc:Adonis/Addons/LucidSlugify";

export default class Tag extends BaseModel {
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

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;
}
