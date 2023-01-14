import { useState } from "react";
import {
  PracticeQuestionSelectorContainer as Container,
  PracticeQuestionSelectorTitle as Title,
  PracticeQuestionSelectorQuestions as Questions,
  PracticeQuestionSelectorQuestion as Question,
  PracticeQuestionSelectorButton as Button,
  PracticeQuestionSelectorSubtitle as Subtitle,
  PracticeQuestionSelectorText as Text,
} from "./styles/practiceQuestionSelector";
import { QuestionTypes } from "../../types";
import { NUMBER_OF_QUESTIONS } from "../../config";

export interface PracticeQuestionProps {
  questionList: QuestionTypes[];
  setQuestionList: React.Dispatch<
    React.SetStateAction<
      {
        title: string;
        question: string;
        resources: string;
        answers: {
          id: number;
          text: string;
          isCorrectAnswer: boolean;
        }[];
      }[]
    >
  >;
  dGQuestionList: QuestionTypes[];
  setDGQuestionList: React.Dispatch<
    React.SetStateAction<
      {
        title: string;
        question: string;
        resources: string;
        answers: {
          id: number;
          text: string;
          isCorrectAnswer: boolean;
        }[];
      }[]
    >
  >;
  setQuestionNumber: React.Dispatch<React.SetStateAction<number>>;
  questionNumber: number;
  //  TODO change any
  combinedQuestionsDetails: any;
}

const PracticeQuestionSelector = ({
  questionList,
  setQuestionList,
  dGQuestionList,
  setDGQuestionList,
  setQuestionNumber,
  questionNumber,
  combinedQuestionsDetails,
}: PracticeQuestionProps) => {
  return (
    <Container>
      <Title>Exam</Title>
      <Questions>
        <Subtitle>Non Dangerous Goods</Subtitle>
        {questionList.map(({ title }, index) => {
          // console.log(combinedQuestionsDetails["B777 Q1"][0].id)
          console.log(combinedQuestionsDetails)
          return (
            <Question>
              <Button
                currentQuestion={questionNumber === index}
                // status={answered ? "#1A6D2D" : flagged ? "red" : "black"}
                onClick={() => setQuestionNumber(index)}
              >
                {title}{" "}
                <Text>
                  {/* {answered && "[Answered]"} {flagged && "[Marked for review]"} */}
                </Text>
              </Button>
            </Question>
          );
        })}
      </Questions>
      <div style={{ borderBottom: "1px solid black" }}></div>
      <Questions>
        <Subtitle>Dangerous Goods</Subtitle>
        {dGQuestionList.map(({ title }, index) => (
          <Question>
            <Button
              currentQuestion={questionNumber === index + NUMBER_OF_QUESTIONS}
              // status={answered ? "#1A6D2D" : flagged ? "red" : "black"}
              onClick={() => setQuestionNumber(NUMBER_OF_QUESTIONS + index)}
            >
              {title}
              <Text>
                {/* {answered && "[Answered]"} {flagged && "[Marked for review]"} */}
              </Text>
            </Button>
          </Question>
        ))}
      </Questions>
    </Container>
  );
};

export default PracticeQuestionSelector;
