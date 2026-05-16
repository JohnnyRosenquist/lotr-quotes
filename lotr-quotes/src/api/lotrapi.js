const baseUrl = "https://the-one-api.dev/v2/";
const auth = import.meta.env.VITE_API_KEY;

const characterArray = await fetchCharacters();

export async function fetchRandomQuote() {
  const response = await fetch(`${baseUrl}quotes/random/`, {
    headers: {
      Authorization: `Bearer ${auth}`,
    },
  });
  const data = await response.json();
  const quote = data.dialog;
  const characterId = data.character;
  return { quote: quote, characterId: characterId };
}

export async function fetchCharacters() {
  console.log("fetched characters");
  const response = await fetch(`${baseUrl}character/`, {
    headers: {
      Authorization: `Bearer ${auth}`,
    },
  });
  const characterArray = await response.json();
  return characterArray.docs;
}

export function getAnswerAlternatives(correct) {
  const correctCharacter = characterArray.find((char) => char._id === correct);

  const character = { name: correctCharacter.name, id: correctCharacter._id };
  const answers = [character];
  while (answers.length < 4) {
    const currChar =
      characterArray[Math.floor(Math.random() * characterArray.length)];
    if (!answers.some((answer) => answer.name === currChar.name)) {
      answers.push({ name: currChar.name, id: currChar._id });
    }
  }
  return answers;
}
