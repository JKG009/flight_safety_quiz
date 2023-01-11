import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { generalProcedureQuestions } from "../../data";
import { QuestionTypes } from "../../types";
import { Card } from "../index";
import {
  ButtonContainer,
  CardContainer,
  Container,
  SideContainer,
  Button,
} from "./styles/learningCards";

type Params = {
  topic: string;
};

const LearningCards = () => {
  const navigate = useNavigate();
  const { topic = "" } = useParams<Params>();
  const [questions, setQuestions] = useState<(QuestionTypes | undefined)[]>([]);
  const [questionNumber, setQuestionNumber] = useState<number>(0);

  useEffect(() => {
    const matchingParams: Record<string, QuestionTypes[]> = {
      // b777:
      // a350:
      // dangerous_goods:
      // first_aid:
      general_procedures: generalProcedureQuestions,
    };
    if (matchingParams[topic]) {
      setQuestions(matchingParams[topic]);
    } else {
      navigate("/error", { replace: true });
    }
  }, [topic, navigate]);

  const question = questions[questionNumber];

  return (
    <Container>
      <CardContainer>
        <SideContainer />
        {question && (
          <Card
            question={question}
            questionNumber={questionNumber}
            totalNumberOfQuestions={questions.length}
          />
        )}
      </CardContainer>
      <ButtonContainer>
        <Button
          disabled={questionNumber <= 0}
          onClick={() => {
            setQuestionNumber(questionNumber - 1);
          }}
        >
          Prev
        </Button>
        <Button
          disabled={questionNumber >= questions.length - 1}
          onClick={() => {
            setQuestionNumber(questionNumber + 1);
          }}
        >
          Next
        </Button>
      </ButtonContainer>
    </Container>
  );
};

export default LearningCards;
