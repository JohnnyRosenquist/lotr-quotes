import Answers from "../Answers/Answers";
import SubmitButton from "../SubmitButton/SubmitButton";
import Quote from "../Quote/Quote";
import { useState } from "react";

export default function QuestionCard({ question, updateScore, loadQuestion }) {
  const [selected, setSelected] = useState(null);
  const [disabled, setDisabled] = useState(true);

  function updateSelected(choice) {
    setDisabled(false);
    setSelected(choice);
  }

  function grade() {
    if (selected) {
      setDisabled(true);
      if (selected === question.quote.character) {
        updateScore(1);
      } else {
        updateScore(0);
      }
      loadQuestion();
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
        <SubmitButton disabled={disabled} grade={grade} />
      </>
    );
  }
}
