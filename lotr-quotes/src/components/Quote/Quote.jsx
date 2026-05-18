import "./Quote.css";
import Card from "react-bootstrap/Card";

export default function Quote({ quote }) {
  return (
    <Card id="quote" className="text-center">
      <Card.Body>
        <Card.Text>{quote}</Card.Text>
      </Card.Body>
    </Card>
  );
}
