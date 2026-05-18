import ListGroup from "react-bootstrap/ListGroup";
import { useState } from "react";
import "./Answers.css";

export default function Answers({ alternatives, updateSelected }) {
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  function setActive(answer) {
    setSelectedAnswer(answer);
    updateSelected(answer);
  }

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
