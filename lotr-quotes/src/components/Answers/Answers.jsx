import ListGroup from "react-bootstrap/ListGroup"
import { useState } from "react";

export default function Answers({ alternatives }) {

    const [selectedAnswer, setSelectedAnswer] = useState(null);

    function setActive(answer) {
        setSelectedAnswer(answer);
    }

    function isActive(answer) {
        return selectedAnswer === answer;
    }

  return (
    <ListGroup className="pt-2" horizontal="md">
      {alternatives.map((alt) => {
        return <ListGroup.Item key={alt.id} active={isActive(alt.id)} onClick={() =>  {setActive(alt.id)}}>{alt.name}</ListGroup.Item>;
      })}
    </ListGroup>
  );
}
