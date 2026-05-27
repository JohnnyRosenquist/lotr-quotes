import "./ScoreCard.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useContext } from "react";
import { GameContext } from "../../App";

/**
 * Component used for displaying the number of points and answered questions
 */
export default function ScoreCard({ score }) {
  const playing = useContext(GameContext);

  function renderScores() {}
  return (
    <Container>
      <Row>
        {playing && (
          <>
            <Col md={6} xs={12} className="d-flex">
              <span className="score text-center flex-md-fill">
                Current points: {score.points}{" "}
              </span>
            </Col>
            <Col md={6} xs={12} className="d-flex">
              <span className="score text-center flex-md-fill">
                Total questions answered: {score.questionsAnswered}
              </span>
            </Col>
          </>
        )}
      </Row>
    </Container>
  );
}
