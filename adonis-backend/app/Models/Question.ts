import { DateTime } from "luxon";
import {
  BaseModel,
  column,
  belongsTo,
  BelongsTo,
  manyToMany,
  ManyToMany,
} from "@ioc:Adonis/Lucid/Orm";

import Theme from "./Theme";
import Tag from "./Tag";

export default class Question extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public title: string;

  @column()
  public correctAnswer: string;

  @column()
  public invalidAnswer1: string;

  @column()
  public invalidAnswer2: string;

  @belongsTo(() => Theme)
  public theme: BelongsTo<typeof Theme>;

  @manyToMany(() => Tag, {
    pivotTimestamps: true,
  })
  public tags: ManyToMany<typeof Tag>;

  @column()
  public themeId: number;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;
}
