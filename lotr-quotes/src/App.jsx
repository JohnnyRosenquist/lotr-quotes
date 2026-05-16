import ScoreCard from "./components/ScoreCard/ScoreCard";
import QuestionCard from "./components/QuestionCard/QuestionCard";
import Stack from "react-bootstrap/Stack";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { fetchRandomQuote, getAnswerAlternatives } from "./api/lotrapi";
import { useState, useEffect } from "react";

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [score, setScore] = useState({ points: 0, questionsAnswered: 0 });

  function updateScore(numPoints) {
    if (numPoints) {
      setScore((s) => ({
        points: s.points + numPoints,
        questionsAnswered: s.questionsAnswered + 1,
      }));
    } else {
      setScore((s) => ({
        points: s.points,
        questionsAnswered: s.questionsAnswered + 1,
      }));
    }
  }

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
        <ScoreCard score={score} />
        <QuestionCard question={currentQuestion} updateScore={updateScore} />
        {currentQuestion ? (
          <Button>Restart</Button>
        ) : (
          <Button onClick={() => loadQuestion()}>Start</Button>
        )}
      </Stack>
    </Container>
  );
}

export default App;
