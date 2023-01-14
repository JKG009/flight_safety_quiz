import { useEffect, useState } from "react";
import { Answers, QuestionTypes } from "../../types";
import { CardProps } from "../card";
import {
  CardContainer,
  Title,
  TitleContainer,
  SmallText,
  Question,
} from "../card/styles/card";
import { AnswerContainer, Answer } from "./styles/practiceCard";

interface AnswerProp {
  answer: Answers;
  index: number;
  questionObject: QuestionTypes;
  questionNumber: number;
  selectedAnswer: boolean;
  setSelectedAnswerNumber: React.Dispatch<React.SetStateAction<number>>;
  setCombinedQuestionList: React.Dispatch<
    React.SetStateAction<(QuestionTypes | undefined)[]>
  >;
}

const PracticeCardAnswer = ({
  answer,
  index,
  questionObject,
  questionNumber,
  selectedAnswer,
  setSelectedAnswerNumber,
  setCombinedQuestionList,
}: AnswerProp) => {

  return (
    <Answer
      selected={selectedAnswer}
      onClick={() => {
        setSelectedAnswerNumber(index);
        //TODO
        // setCombinedQuestionList((state) => ({...state, state}))
        // questionObject.answered = true;
        if (answer.isCorrectAnswer) {
          // questionObject.answeredCorrectly = true;
        } else {
          // questionObject.answeredCorrectly = false;
        }
      }}
    >
      {answer.text}
    </Answer>
  );
};

interface PracticeCardProps extends CardProps {
  setCombinedQuestionList: React.Dispatch<
    React.SetStateAction<(QuestionTypes | undefined)[]>
  >;
}

const PracticeCard = ({
  questionObject,
  totalNumberOfQuestions,
  questionNumber,
  setCombinedQuestionList,
}: PracticeCardProps) => {
  const { title, question, answers } =
    questionObject;

  const [shuffledAnswers, setShuffledAnswers] = useState<Answers[]>([]);
  const [selectedAnswerNumber, setSelectedAnswerNumber] = useState<number>(-1);

  useEffect(() => {
    setShuffledAnswers(shuffleAnswers(answers));
  }, [answers]);

  // useEffect(() => {
  //   if (!answered) {
  //     setSelectedAnswerNumber(-1);
  //   }
  // }, [questionObject, answered]);

  const shuffleAnswers = (arr: Answers[]) => {
    return arr.sort(() => 0.5 - Math.random());
  };


  return (
    <CardContainer>
      <TitleContainer>
        <Title>{title}</Title>
        <SmallText>
          Question: {questionNumber + 1} / {totalNumberOfQuestions}
        </SmallText>
      </TitleContainer>
      <Question>{question}</Question>
      <AnswerContainer>
        {shuffledAnswers.map((answer, index) => (
          <PracticeCardAnswer
            answer={answer}
            index={index}
            questionObject={questionObject}
            questionNumber={questionNumber}
            selectedAnswer={selectedAnswerNumber === index}
            setSelectedAnswerNumber={setSelectedAnswerNumber}
            setCombinedQuestionList={setCombinedQuestionList}
          />
        ))}
      </AnswerContainer>
    </CardContainer>
  );
};

export default PracticeCard;
