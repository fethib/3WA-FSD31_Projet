export default async function createRoom(data, rooms) {
  //* Generate a room ID and check if it is unique
  let roomId = generateId();
  while (rooms.find((room) => room.id === roomId)) {
    roomId = generateId();
  }

  const questions = await pickQuestions(data.themes);

  //* Create a room object
  const room = {
    id: roomId,
    status: "pending",
    displayedQuestion: null,
    timer: null,
    teams: {
      kebab: {
        score: 0,
        vote: null,
      },
      durum: {
        score: 0,
        vote: null,
      },
    },
    users: [],
    questions,
  };

  return room;
}

//* Function that generate a ID of n chars
const generateId = (numberOfChars = 5) => {
  let id = "";
  let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  for (let i = 0; i < numberOfChars; i++) {
    id += characters.charAt(Math.floor(Math.random() * 36));
  }
  return id;
};

//* Function to fetch the questions from the API according to the themes
async function pickQuestions(themes) {
  const pickedQuestions = [];
  const requestedThemes = themes.join(",");

  const response = await fetch(
    "http://localhost:3333/api/questions?theme=" + requestedThemes
  );
  const data = await response.json();

  // Populate pickedQuestions with the questions from the API
  // Shuffle the answers
  data.forEach((question) => {
    const answers = [
      {
        id: generateId(),
        title: question.correctAnswer,
        isCorrect: true,
      },
      {
        id: generateId(),
        title: question.incorrectAnswer1,
        isCorrect: false,
      },
      {
        id: generateId(),
        title: question.incorrectAnswer2,
        isCorrect: false,
      },
    ].sort(() => Math.random() - 0.5);

    pickedQuestions.push({
      title: question.title,
      answers,
    });
  });

  return pickedQuestions;
}
