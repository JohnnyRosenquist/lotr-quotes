import Answers from "../Answers/Answers";
import SubmitButton from "../SubmitButton/SubmitButton";
import Dialog from "../Dialog/Dialog";
import Quote from "../Quote/Quote";
import { useState } from "react";

import {
  FloatingOverlay,
  FloatingFocusManager,
  useFloating,
} from "@floating-ui/react";
import "./QuestionCard.css";

/**
 * Container component housing the question components and grading logic, triggers an overlay upon submitting answers
 */
export default function QuestionCard({ question, updateScore, loadQuestion }) {
  const [selected, setSelected] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const { refs, context } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
  });

  function updateSelected(choice) {
    setDisabled(false);
    setSelected(choice);
  }

  function resume() {
    setIsOpen((previousShowDialog) => !previousShowDialog);
    loadQuestion();
  }

  function grade() {
    if (selected) {
      setDisabled(true);
      if (selected === question.quote.characterId) {
        updateScore(1);
      } else {
        updateScore(0);
      }
      setIsOpen((previousShowDialog) => !previousShowDialog);
    }
  }

  if (question) {
    return (
      <div style={{ height: "60vh" }}>
        <Quote quote={question.quote.phrase} />
        <Answers
          alternatives={question.alternatives}
          updateSelected={updateSelected}
        />
        <div className="d-flex justify-content-center">
          <SubmitButton disabled={disabled} grade={grade} />
        </div>
        {isOpen && (
          <FloatingOverlay
            className="Dialog-overlay"
            lockScroll
            style={{ paddingTop: "20vh" }}
          >
            <FloatingFocusManager context={context} modal>
              <Dialog
                answer={selected}
                correct={question}
                nextQuestion={resume}
              />
            </FloatingFocusManager>
          </FloatingOverlay>
        )}
      </div>
    );
  }
}
