import ScoreCard from "./components/ScoreCard/ScoreCard";
import QuestionCard from "./components/QuestionCard/QuestionCard";
import Stack from "react-bootstrap/Stack";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { fetchRandomQuote, getAnswerAlternatives } from "./api/lotrapi";
import { useState, useEffect } from "react";

const placeholderScore = { score: "1", questionsAnswered: "5" };

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(undefined);

  async function loadQuestion() {
    const currQuote = await fetchRandomQuote();
    const currAlternatives = await getAnswerAlternatives(currQuote.characterId);
    setCurrentQuestion({
      quote: { phrase: currQuote.quote, character: currQuote.characterId },
      alternatives: currAlternatives,
    });
  }

  return (
    <Container>
      <Stack>
        <h1>LOTR - Who said it?</h1>
        <ScoreCard score={placeholderScore} />
        <QuestionCard question={currentQuestion} />
        <Button>Restart</Button>
      </Stack>
    </Container>
  );
}

export default App;
