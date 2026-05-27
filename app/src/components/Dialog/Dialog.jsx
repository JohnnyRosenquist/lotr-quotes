import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/esm/Button";

/**
 * Component displayed when submitting an answer, presents the correct answer to the player.
 */
export default function Dialog({ answer, correct, nextQuestion }) {
  return (
    <Card
      className="text-center p-2"
      style={{ width: "60vw", backgroundColor: "#eeeaeaf5" }}
    >
      {answer === correct.quote.characterId ? (
        <p>Correct answer!</p>
      ) : (
        <p>
          The correct answer was:{" "}
          <span className="fst-italic">{correct.quote.characterName}</span>
        </p>
      )}
      <Button variant="success" onClick={nextQuestion}>
        Next question
      </Button>
    </Card>
  );
}
