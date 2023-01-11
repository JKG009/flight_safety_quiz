import { QuestionTypes } from "../../types";
import { useState } from "react";
import {
  AccordianContainer,
  AnswerContainer,
  CardContainer,
  Subtitle,
  Title,
  TitleContainer,
  SmallText,
  Question,
  Resources,
  Answer,
} from "./styles/card";

interface Props {
  questionNumber: number;
  totalNumberOfQuestions: number;
  question: QuestionTypes;
}

const Card = ({
  question: Q,
  questionNumber,
  totalNumberOfQuestions,
}: Props) => {
  const [active, setActive] = useState(false);
  const { title, question, correctAnswer, resources } = Q;
  return (
    <CardContainer>
      <TitleContainer>
        <Title>{title}</Title>
        <SmallText>
          Question: {questionNumber + 1} / {totalNumberOfQuestions}
        </SmallText>
      </TitleContainer>
      <Question>{question}</Question>
      <AccordianContainer onClick={() => setActive(!active)}>
        <AnswerContainer>
          <Subtitle>Answer</Subtitle>
          <Subtitle>{active ? "-" : "+"}</Subtitle>
        </AnswerContainer>
        <Answer active={active}>{correctAnswer}</Answer>
      </AccordianContainer>
      <Resources>Resources: {resources}</Resources>
    </CardContainer>
  );
};

export default Card;
