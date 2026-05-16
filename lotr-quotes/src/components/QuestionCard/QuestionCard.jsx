import Answers from "../Answers/Answers";
import SubmitButton from "../SubmitButton/SubmitButton";
import Quote from "../Quote/Quote";
import { useState } from "react";

export default function QuestionCard({ question, updateScore }) {
  const [selected, setSelected] = useState(" ");

  function updateSelected(choice) {
    setSelected(choice);
  }

  function grade() {
    if (selected && selected === question.quote.character) {
      updateScore(1);
      console.log("Correct");
    } else {
      updateScore(0);
      console.log("InCorrect");
    }
  }

  if (question) {
    return (
      <>
        <Quote quote={question.quote.phrase} />
        <Answers
          alternatives={question.alternatives}
          updateSelected={updateSelected}
        />
        <SubmitButton grade={grade} />
      </>
    );
  }
}
