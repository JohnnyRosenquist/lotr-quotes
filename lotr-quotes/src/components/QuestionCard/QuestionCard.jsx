import Answers from "../Answers/Answers";
import SubmitButton from "../SubmitButton/SubmitButton";
import Quote from "../Quote/Quote";
import { useState } from "react";

export default function QuestionCard({ question }) {

  if (question !== undefined) {
    return (
      <>
        <Quote quote={question.quote.phrase} />
        <Answers alternatives={question.alternatives} />
        <SubmitButton />
      </>
    );
  }
}
