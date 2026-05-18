import ListGroup from "react-bootstrap/ListGroup";
import { useState } from "react";
import "./Answers.css";

/**
 * Component used for housing the possible answers and highlighting the selected one 
 * Takes an array of answers, and a callback function for setting the selected answer in App.jsx
 */
export default function Answers({ alternatives, updateSelected }) {
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  function setActive(answer) {
    setSelectedAnswer(answer);
    updateSelected(answer);
  }

  /**
   * Sets the selected ListGroup.Item as active
   */
  function isActive(answer) {
    return selectedAnswer === answer;
  }

  return (
    <ListGroup id="answerList" className="pt-2 flexbox" horizontal="md">
      {alternatives.map((alt) => {
        return (
          <ListGroup.Item
            className="flex-fill text-center"
            key={alt.id}
            active={isActive(alt.id)}
            onClick={() => {
              setActive(alt.id);
            }}
          >
            {alt.name}
          </ListGroup.Item>
        );
      })}
    </ListGroup>
  );
}
