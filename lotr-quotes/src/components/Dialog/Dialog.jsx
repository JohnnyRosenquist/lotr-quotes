import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/esm/Button";

export default function Dialog({ answer, correct, nextQuestion }) {
  return (
    <Card>
      {answer === correct.quote.characterId ? (
        <p>Correct answer!</p>
      ) : (
        <p>The correct answer was: {correct.quote.characterName}</p>
      )}
      <Button onClick={nextQuestion}>Next question</Button>
    </Card>
  );
}
