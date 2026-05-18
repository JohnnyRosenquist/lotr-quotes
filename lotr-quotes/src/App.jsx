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
import "./App.css";

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
    await loadQuestion();
    togglePlaying();
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
      <Container id="container" className=" shadow rounded mt-4 pb-3">
        <Stack className="h-100">
          <header className="text-center m-2">
            <h1>LOTR - Who said it?</h1>
          </header>
          <ScoreCard score={score} />
          <QuestionCard
            question={currentQuestion}
            updateScore={updateScore}
            loadQuestion={loadQuestion}
          />
          {currentQuestion ? (
            <Button
              variant="success"
              onClick={() => window.location.reload()}
              className="mx-auto col-lg-4 col-md-6 col-sm-8 col-9"
            >
              End
            </Button>
          ) : (
            <Button
              variant="success"
              className="my-auto mx-auto col-lg-4 col-md-6 col-sm-8 col-9"
              onClick={() => startGame()}
            >
              Start
            </Button>
          )}
        </Stack>
      </Container>
    </GameContext.Provider>
  );
}

export default App;
