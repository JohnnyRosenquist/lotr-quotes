import ScoreCard from "./components/ScoreCard/ScoreCard";
import QuestionCard from "./components/QuestionCard/QuestionCard";
import Stack from "react-bootstrap/Stack";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import {
  fetchRandomQuote,
  getAnswerAlternatives,
  addPlainTextName,
} from "./api/lotrapi";
import { useState, useEffect, createContext } from "react";

export const GameContext = createContext();

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [score, setScore] = useState({ points: 0, questionsAnswered: 0 });
  const [playing, setPlaying] = useState(false);

  function togglePlaying() {
    setPlaying((prevPlaying) => !prevPlaying);
  }

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

  async function startGame() {
    togglePlaying();
    loadQuestion();
  }

  async function loadQuestion() {
    const currQuote = await fetchRandomQuote();
    addPlainTextName(currQuote);
    const currAlternatives = await getAnswerAlternatives(currQuote);
    setCurrentQuestion({
      quote: {
        phrase: currQuote.quote,
        characterId: currQuote.characterId,
        characterName: currQuote.name,
      },
      alternatives: currAlternatives,
    });
  }

  return (
    <GameContext.Provider value={playing}>
      <Container>
        <Stack>
          <h1>LOTR - Who said it?</h1>
          <ScoreCard score={score} />
          <QuestionCard
            question={currentQuestion}
            updateScore={updateScore}
            loadQuestion={loadQuestion}
          />
          {currentQuestion ? (
            <Button onClick={() => window.location.reload()}>End</Button>
          ) : (
            <Button onClick={() => startGame()}>Start</Button>
          )}
        </Stack>
      </Container>
    </GameContext.Provider>
  );
}

export default App;
