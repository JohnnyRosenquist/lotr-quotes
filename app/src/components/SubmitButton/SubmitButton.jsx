import Button from "react-bootstrap/Button";

/**
 * Button component styled and used for submitting the answer,
 * disabled param used for disabling button after submitting answers to avoid issues during async calls.
 */
export default function SubmitButton({ grade, disabled }) {
  return (
    <Button
      disabled={disabled}
      className="mt-2 mb-2"
      variant="success"
      onClick={grade}
    >
      Submit answer
    </Button>
  );
}
