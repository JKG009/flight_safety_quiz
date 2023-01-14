import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { a350Questions, b777Questions, dangerousGoodsQuestions, firstAidQuestions, generalProcedureQuestions } from "../../data";
import { QuestionTypes } from "../../types";
import { Card, LearningQuestionSelector } from "../index";
import {
  ButtonContainer,
  CardContainer,
  Container,
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
      b777: b777Questions,
      a350: a350Questions,
      dangerous_goods: dangerousGoodsQuestions,
      first_aid: firstAidQuestions,
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
        <LearningQuestionSelector
          setQuestionNumber={setQuestionNumber}
          topic={topic}
          questions={questions}
          questionNumber={questionNumber}
        />
        {question && (
          <Card
            questionObject={question}
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
