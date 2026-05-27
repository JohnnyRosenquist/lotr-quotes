import {
  FloatingOverlay,
  FloatingFocusManager,
  useFloating,
} from "@floating-ui/react";
import Card from "react-bootstrap/Card";
import { useState } from "react";
import CardBody from "react-bootstrap/esm/CardBody";
import Button from "react-bootstrap/esm/Button";
import "./Summary.css";
import CardTitle from "react-bootstrap/esm/CardTitle";

export default function Summary({ score, toggleShowSummary }) {
  const [isOpen, setIsOpen] = useState(false);
  const { refs, context } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
  });

  function close() {
    setIsOpen(false);
    toggleShowSummary();
  }
  return (
    <FloatingOverlay className="Summary-overlay z-3" lockScroll>
      <FloatingFocusManager context={context} modal>
        <Card style={{ backgroundColor: "#eeeaeaf5" }}>
          <CardBody className="p-5">
            <CardTitle className="text-center mb-2">Game summary </CardTitle>
            <CardTitle className="text-center pb-3">
              Score {score.points} / {score.questionsAnswered}
            </CardTitle>
            <Button className="m-2" variant="success" onClick={() => close()}>
              Resume
            </Button>
            <Button
              className="m-2"
              variant="warning"
              onClick={() => window.location.reload()}
            >
              New game
            </Button>
          </CardBody>
        </Card>
      </FloatingFocusManager>
    </FloatingOverlay>
  );
}
