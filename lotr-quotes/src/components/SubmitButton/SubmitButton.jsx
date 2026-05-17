import Button from "react-bootstrap/Button";

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
