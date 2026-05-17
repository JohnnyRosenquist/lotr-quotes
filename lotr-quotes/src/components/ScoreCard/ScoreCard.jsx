import "./ScoreCard.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useContext } from "react";
import { GameContext } from "../../App";

export default function ScoreCard({ score }) {
  const playing = useContext(GameContext);

  function renderScores() {}
  return (
    <Container>
      <Row>
        {playing && (
          <>
            <Col xs={12} sm={6}>
              <span>Current points: {score.points} </span>
            </Col>
            <Col xs={12} sm={6}>
              <span className="ms-auto">
                Total questions answered: {score.questionsAnswered}
              </span>
            </Col>
          </>
        )}
      </Row>
    </Container>
  );
}
