import ScoreCard from "./components/ScoreCard/ScoreCard";
import QuestionCard from "./components/QuestionCard/QuestionCard";
import Stack from "react-bootstrap/Stack";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

const placeholderQuestion = {
  quote:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  alternatives: ["Boromir", "Aragorn", "Frodo", "Gandalf"],
};
const placeholderScore = { score: "1", questionsAnswered: "5" };

function App() {
  return (
    <Container>
      <Stack>
        <h1>LOTR - Who said it?</h1>
        <ScoreCard score={placeholderScore} />
        <QuestionCard question={placeholderQuestion} />
        <Button>Restart</Button>
      </Stack>
    </Container>
  );
}

export default App;
