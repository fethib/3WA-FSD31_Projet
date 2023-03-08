import BaseSeeder from "@ioc:Adonis/Lucid/Seeder";
import Question from "App/Models/Question";
import Tag from "App/Models/Tag";

export default class QuestionSeeder extends BaseSeeder {
  public async run() {
    const questions = await Question.createMany([
      {
        title: "Quelle est la capitale de la Suède ?",
        correctAnswer: "Stockholm, comme le syndrome.",
        invalidAnswer1: "Paris, comme la capitale de la France.",
        invalidAnswer2: "Ikea, comme le truc avec les meubles là.",
        themeId: 1,
      },
      {
        title:
          "Parmi ces 3 villes, laquelle ne se trouve pas au pays du fusil semi-automatique AR-15 (on parle des Etats-Unis si vous ne l’aviez pas) ?",
        correctAnswer: "“Minsk”, dans l’Ohio",
        invalidAnswer1: "“Belgrade”, dans le Montana",
        invalidAnswer2: "“Berlin”, dans le New Hampshire",
        themeId: 1,
      },
      {
        title: "Lequel de ces pays est également appelé “Pays des aigles”",
        correctAnswer: "L’Albanie",
        invalidAnswer1: "Les Etats-Unis",
        invalidAnswer2: "Le Piafabekistan",
        themeId: 1,
      },
      {
        title:
          "Parmi ces 3 propositions, quelle entreprise a été fondée en 1889 (soit 2 ans avant la naissance de Michel Drucker) ?",
        correctAnswer: "Nintendo",
        invalidAnswer1: "Ford",
        invalidAnswer2: "Disney",
        themeId: 2,
      },
      {
        title:
          "Quel ancien chef du gouvernement Britannique a notamment été connu pour avoir brisé la grève des mineurs dans les années 1980 ?",
        correctAnswer: "Margaret Thatcher",
        invalidAnswer1: "Winston Churchill",
        invalidAnswer2: "Boris Johnson",
        themeId: 2,
      },
      {
        title: "Où a eu lieue la “Guerre du cochon” ?",
        correctAnswer: "Dans l’actuelle zone des Îles San Juan.",
        invalidAnswer1: "A Cuba, sur la “baie des cochons” pour être exact.",
        invalidAnswer2: "Dans la boucherie kosher “Chez José” à Aubervilliers.",
        themeId: 2,
      },
      {
        title: "Qui est Iris XVI ?",
        correctAnswer:
          "Un cheval abattu par les vilains nazis pour un acte de rébellion",
        invalidAnswer1: "La femme de Louis XVI",
        invalidAnswer2: "Le pharaon entre Iris XV et Iris XVII",
        themeId: 2,
      },
      {
        title:
          "En 1903, quel physicien a reçu le Prix Nobel de Physique grâce aux travaux de sa femme (alors que lui, il avait rien foutu) ?",
        correctAnswer: "Pierre Curie",
        invalidAnswer1: "Albert Einstein",
        invalidAnswer2: "Enrico Fermi",
        themeId: 3,
      },
      {
        title:
          "Par quel président l’équipe d’Afrique du Sud s’est vue remettre le trophée de la Coupe du Monde de Rugby en 1995 ?",
        correctAnswer: "Nelson Mandela",
        invalidAnswer1: "Barack Obama",
        invalidAnswer2: "Mikhaïl Gorbatchev",
        themeId: 6,
      },
      {
        title:
          "Quel nom de mammifère est attribué au champion de cyclisme Bernard Hinault ?",
        correctAnswer: "Le Blaireau",
        invalidAnswer1: "Le Coq",
        invalidAnswer2: "L’Eléphant",
        themeId: 6,
      },
      {
        title: "Dans quel bâtiment coupes t-on du bois ?",
        correctAnswer: "Dans une scierie.",
        invalidAnswer1: "En Syrie.",
        invalidAnswer2: "Deux secondes, je demande à Siri.",
        themeId: 9,
      },
      {
        title: "Quel est le nom de l’émission TV qui a inspiré ce jeu ?",
        correctAnswer: "Burger Quiz",
        invalidAnswer1: "Question pour un Champion",
        invalidAnswer2: "Koh-Lanta",
        themeId: 9,
      },
      {
        title:
          "Quel duo célèbre n’est pas connu pour ses sketchs télévisés et ses films de comédie ?",
        correctAnswer: "Bigflo et Oli",
        invalidAnswer1: "Laurel et Hardy",
        invalidAnswer2: "Eric et Ramzy",
        themeId: 9,
      },
      {
        title:
          "Dans le jeu vidéo “Grand Theft Auto: Vice City”, quel est le nom du personnage principal incarné par le joueur ?",
        correctAnswer: "Tommy Vercetti",
        invalidAnswer1: "Tommy Niature",
        invalidAnswer2: "Tommy Mimathy",
        themeId: 12,
      },
      {
        title: "Qu’est-ce que le “Sfumato” ?",
        correctAnswer:
          "Une technique de peinture inventée par Leonard de Vinci.",
        invalidAnswer1:
          "Le calumet de la paix utilisé par Buffalo Bill lors de ses spectacles.",
        invalidAnswer2: "Un opéra italien. 🤌",
        themeId: 13,
      },
      {
        title: "Quelle est le nom de l’étoile la plus proche de la Terre ?",
        correctAnswer: "Le Soleil",
        invalidAnswer1: "Proxima Centauri",
        invalidAnswer2: "Etoiles, le streamer",
        themeId: 15,
      },
    ]);

    // For each question, we attach between 1 and 3 tags
    for (const q of questions) {
      const numberOfTags = Math.floor(Math.random() * 3) + 1;
      const tags = await Tag.query().limit(numberOfTags).orderByRaw("random()");
      await q.related("tags").attach(tags.map((t) => t.id));
    }
  }
}
