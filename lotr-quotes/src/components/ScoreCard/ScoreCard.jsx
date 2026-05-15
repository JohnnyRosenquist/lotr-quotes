import "./ScoreCard.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function ScoreCard({ score }) {
  return (
    <Container>
      <Row>
        <Col xs={12} sm={6}>
          <span>Current points: {score.points} </span>
        </Col>
        <Col xs={12} sm={6}>
          <span className="ms-auto">
            Total questions answered: {score.questionsAnswered}{" "}
          </span>
        </Col>
      </Row>
    </Container>
  );
}
