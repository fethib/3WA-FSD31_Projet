import BaseSeeder from "@ioc:Adonis/Lucid/Seeder";
import Theme from "App/Models/Theme";

export default class ThemeSeeder extends BaseSeeder {
  public async run() {
    await Theme.createMany([
      {
        id: 1,
        name: "Géographie",
        emoji: "🌍",
        slug: "geographie",
      },
      {
        id: 2,
        name: "Histoire",
        emoji: "⏳",
        slug: "histoire",
      },
      {
        id: 3,
        name: "Sciences",
        emoji: "🔬",
        slug: "sciences",
      },
      {
        id: 4,
        name: "Cinéma",
        emoji: "🎬",
        slug: "cinema",
      },
      {
        id: 5,
        name: "Musique",
        emoji: "🎵",
        slug: "musique",
      },
      {
        id: 6,
        name: "Sport",
        emoji: "⚽️",
        slug: "sport",
      },
      {
        id: 7,
        name: "Littérature",
        emoji: "📚",
        slug: "litterature",
      },
      {
        id: 8,
        name: "Technologie",
        emoji: "💻",
        slug: "technologie",
      },
      {
        id: 9,
        name: "Culture générale",
        emoji: "📖",
        slug: "culture-generale",
      },
      {
        id: 10,
        name: "Animaux",
        emoji: "🐶",
        slug: "animaux",
      },
      {
        id: 11,
        name: "Séries & TV",
        emoji: "📺",
        slug: "series-tv",
      },
      {
        id: 12,
        name: "Jeux vidéo",
        emoji: "🎮",
        slug: "jeux-video",
      },
      {
        id: 13,
        name: "Art",
        emoji: "🎨",
        slug: "art",
      },
      {
        id: 14,
        name: "Droit",
        emoji: "⚖️",
        slug: "droit",
      },
      {
        id: 15,
        name: "Espace",
        emoji: "🪐",
        slug: "espace",
      },
      {
        id: 16,
        name: "Insolite",
        emoji: "🤯",
        slug: "insolite",
      },
    ]);
  }
}
