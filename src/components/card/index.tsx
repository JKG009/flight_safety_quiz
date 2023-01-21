import { Question as QuestionType } from "../../types";
import { useEffect, useState } from "react";
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

export interface CardProps {
  questionNumber: number;
  totalNumberOfQuestions: number;
  questionObject: QuestionType;
}

const Card = ({
  questionObject,
  questionNumber,
  totalNumberOfQuestions,
}: CardProps) => {
  const [active, setActive] = useState(false);
  const { title, question, answers, resources } = questionObject;

  useEffect(() => {
    setActive(false);
  }, [questionObject]);

  return (
    <CardContainer>
      <TitleContainer>
        <Title>{title}</Title>
        <SmallText>
          Question: {questionNumber + 1} / {totalNumberOfQuestions}
        </SmallText>
      </TitleContainer>
      <Question>{question}</Question>
      <AccordianContainer>
        <AnswerContainer onClick={() => setActive(!active)}>
          <Subtitle>Answer</Subtitle>
          <Subtitle>{active ? "-" : "+"}</Subtitle>
        </AnswerContainer>
        <Answer active={active}>{answers[0].text}</Answer>
      </AccordianContainer>
      <Resources>Resources: {resources}</Resources>
    </CardContainer>
  );
};

export default Card;
