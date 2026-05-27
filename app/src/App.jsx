import ScoreCard from "./components/ScoreCard/ScoreCard";
import Summary from "./components/Summary/Summary"
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

/**
 * Houses the main structure of the game, including the overarching logic, GameContext and game related states.
 */
function App() {
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [score, setScore] = useState({ points: 0, questionsAnswered: 0 });
  const [playing, setPlaying] = useState(false);
  const [showSummary, setShowSummary] = useState(false);

  /**
   * State used for GameContext
   */
  function togglePlaying() {
    setPlaying((prevPlaying) => !prevPlaying);
  }

  /**
   * State used for displaying game summary
   */
  function toggleShowSummary() {
    setShowSummary((precShowSummary) => !precShowSummary);
  }

  /**
   * Updates the scores displayed in the ScoreCard
   */
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

  /**
   * Starts the game, awaits the API responses prior to toggling the playing state to true
   */
  async function startGame() {
    await loadQuestion();
    togglePlaying();
  }

  /**
   * Creates question objects and sets is as the currentQuestion
   */
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
          {showSummary && <Summary score={score} toggleShowSummary={toggleShowSummary} />}
          {currentQuestion ? (
            <Button
              variant="success"
              onClick={() => toggleShowSummary()}
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
