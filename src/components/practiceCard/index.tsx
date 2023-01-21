import { useEffect, useState, useRef } from "react";
import {
  Answer as AnswerType,
  Question as QuestionType,
  CombinedQuestionDetails,
} from "../../types";
import { CardProps } from "../card";
import {
  CardContainer,
  Title,
  TitleContainer,
  SmallText,
  Question,
} from "../card/styles/card";
import { AnswerContainer, Answer } from "./styles/practiceCard";
import { formatTime, shuffleAnswers } from "../../ultis";
import { EXAM_TIME_LIMIT } from "../../config";

interface AnswerProp {
  answer: AnswerType;
  index: number;
  questionObject: QuestionType;
  questionNumber: number;
  selectedAnswer: boolean;
  setSelectedAnswerNumber: React.Dispatch<React.SetStateAction<string | null>>;
  setCombinedQuestionList: React.Dispatch<React.SetStateAction<QuestionType[]>>;
  setCombinedQuestionsDetails: React.Dispatch<
    React.SetStateAction<CombinedQuestionDetails>
  >;

  combinedQuestionsDetails: CombinedQuestionDetails;
}

const PracticeCardAnswer = ({
  answer,
  index,
  questionObject,
  questionNumber,
  selectedAnswer,
  setSelectedAnswerNumber,
  setCombinedQuestionList,
  setCombinedQuestionsDetails,
  combinedQuestionsDetails,
}: AnswerProp) => {
  const correctAnswer =
    questionObject.answers.find((answer) => answer.isCorrectAnswer)?.text ===
    answer.text;

  return (
    <Answer
      selected={selectedAnswer}
      onClick={() => {
        setSelectedAnswerNumber(answer.text);

        if (correctAnswer) {
          setCombinedQuestionsDetails((state) => ({
            ...state,
            [questionObject.title]: {
              ...state[questionObject.title],
              answeredCorrectly: true,
            },
          }));
        } else {
          setCombinedQuestionsDetails((state) => ({
            ...state,
            [questionObject.title]: {
              ...state[questionObject.title],
              answeredCorrectly: false,
            },
          }));
        }
      }}
    >
      {answer.text}
    </Answer>
  );
};

interface PracticeCardProps extends CardProps {
  setCombinedQuestionList: React.Dispatch<React.SetStateAction<QuestionType[]>>;
  combinedQuestionsDetails: CombinedQuestionDetails;
  setCombinedQuestionsDetails: React.Dispatch<React.SetStateAction<{}>>;
  endTest: boolean;
  dGQuestionList: QuestionType[];
  startTest: boolean;
  setEndTest: React.Dispatch<React.SetStateAction<boolean>>;
}

const PracticeCard = ({
  questionObject,
  totalNumberOfQuestions,
  questionNumber,
  setCombinedQuestionList,
  combinedQuestionsDetails,
  setCombinedQuestionsDetails,
  endTest,
  dGQuestionList,
  startTest,
  setEndTest,
}: PracticeCardProps) => {
  const { title, question, answers } = questionObject;

  const [shuffledAnswers, setShuffledAnswers] = useState<AnswerType[]>([]);
  const [selectedAnswerNumber, setSelectedAnswerNumber] = useState(
    combinedQuestionsDetails[title]?.answer
  );
  const [timeRemaining, setTimeRemaining] = useState(EXAM_TIME_LIMIT);
  const timerId = useRef<NodeJS.Timeout>();

  useEffect(() => {
    if (startTest) {
      timerId.current = setInterval(() => {
        setTimeRemaining((state) => state - 1);
      }, 1000);
    }
    return () => clearInterval(timerId.current);
  }, [startTest]);

  useEffect(() => {
    if (timeRemaining <= 0) {
      clearInterval(timerId.current);
      setEndTest(true);
    }
  }, [timeRemaining]);

  useEffect(() => {
    setShuffledAnswers(shuffleAnswers(answers));
  }, [answers]);

  useEffect(() => {
    if (combinedQuestionsDetails[title]?.answer) {
      setSelectedAnswerNumber(combinedQuestionsDetails[title]?.answer);
    }
  }, [combinedQuestionsDetails, title]);

  const [correctGeneralAnswered, setCorrectGeneralAnswered] = useState(0);
  const [correctDGAnswered, setCorrectDGAnswered] = useState(0);

  const calPercentage = (
    numberOfCorrectQuestion: number,
    totalNumberOfQuestions: number
  ) => {
    return (100 * numberOfCorrectQuestion) / totalNumberOfQuestions;
  };

  useEffect(() => {
    for (const object in combinedQuestionsDetails) {
      if (combinedQuestionsDetails[object].answeredCorrectly === true) {
        setCorrectGeneralAnswered((state) => state + 1);
        dGQuestionList.forEach((question) => {
          if (combinedQuestionsDetails[object].id === question.title) {
            setCorrectDGAnswered((state) => state + 1);
            setCorrectGeneralAnswered((state) => state - 1);
          }
        });
      }
    }
  }, [endTest]);

  return endTest ? (
    <CardContainer>
      <TitleContainer>
        <Title>Results</Title>
      </TitleContainer>
      <SmallText>The exam has now ended.</SmallText>
      <SmallText>
        You got {correctGeneralAnswered}/
        {totalNumberOfQuestions - dGQuestionList.length} non-DG questions
        correct. (
        {calPercentage(
          correctGeneralAnswered,
          totalNumberOfQuestions - dGQuestionList.length
        )}
        %)
      </SmallText>
      <SmallText>
        You got {correctDGAnswered}/{dGQuestionList.length} DG questions correct.{" "}
        ({calPercentage(correctDGAnswered, dGQuestionList.length)}%)
      </SmallText>
    </CardContainer>
  ) : (
    <CardContainer>
      <TitleContainer>
        <Title>{title}</Title>
        <SmallText>
          Question: {questionNumber + 1} / {totalNumberOfQuestions}
        </SmallText>
        <SmallText>{formatTime(timeRemaining)}</SmallText>
      </TitleContainer>
      <Question>{question}</Question>
      <AnswerContainer>
        {shuffledAnswers.map((answer, index) => {
          return (
            <PracticeCardAnswer
              answer={answer}
              index={index}
              questionObject={questionObject}
              questionNumber={questionNumber}
              selectedAnswer={selectedAnswerNumber === answer.text}
              setSelectedAnswerNumber={setSelectedAnswerNumber}
              setCombinedQuestionList={setCombinedQuestionList}
              setCombinedQuestionsDetails={setCombinedQuestionsDetails}
              combinedQuestionsDetails={combinedQuestionsDetails}
            />
          );
        })}
      </AnswerContainer>
    </CardContainer>
  );
};

export default PracticeCard;
