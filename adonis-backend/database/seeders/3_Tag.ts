import BaseSeeder from "@ioc:Adonis/Lucid/Seeder";
import Tag from "App/Models/Tag";

export default class TagSeeder extends BaseSeeder {
  public async run() {
    await Tag.createMany([
      {
        id: 1,
        name: "Tag A",
        slug: "tag-a",
      },
      {
        id: 2,
        name: "Tag B",
        slug: "tag-b",
      },
      {
        id: 3,
        name: "Tag C",
        slug: "tag-c",
      },
      {
        id: 4,
        name: "Tag D",
        slug: "tag-d",
      },
      {
        id: 5,
        name: "Tag E",
        slug: "tag-e",
      },
      {
        id: 6,
        name: "Tag F",
        slug: "tag-f",
      },
      {
        id: 7,
        name: "Tag G",
        slug: "tag-g",
      },
      {
        id: 8,
        name: "Tag H",
        slug: "tag-h",
      },
      {
        id: 9,
        name: "Tag I",
        slug: "tag-i",
      },
      {
        id: 10,
        name: "Tag J",
        slug: "tag-j",
      },
    ]);
  }
}
