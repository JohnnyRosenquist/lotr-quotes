const baseUrl = "https://the-one-api.dev/v2/";
const auth = import.meta.env.VITE_API_KEY;

const characterArray = await fetchCharacters();

/**
 * Fetches a random quote from the API and returns an object used as a question. 
 */
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

/**
 * Fetches the list of characters from the API
 */
export async function fetchCharacters() {
  const response = await fetch(`${baseUrl}character/`, {
    headers: {
      Authorization: `Bearer ${auth}`,
    },
  });
  const characterArray = await response.json();
  return characterArray.docs;
}

/**
 * Adds the name of the character to the question, finds the correct name based on their id. 
 */
export function addPlainTextName(question) {
  const plainText = characterArray.find(
    (char) => char._id === question.characterId,
  );
  question.name = plainText.name;
}

/**
 * Takes the question and adds a list of answer alternatives to it, ensures that the correct answer is only added once.
 */
export function getAnswerAlternatives(question) {
  const character = { name: question.name, id: question.characterId };
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
