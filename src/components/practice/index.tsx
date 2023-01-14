import {
  getCombinedQuestionsDetails,
  getDGQuestions,
  getQuestions,
} from "../../ultis";
import {
  InstructionContainer,
  PracticeContainer,
  PracticeTitle,
  PracticeText,
  PracticeButton,
} from "./styles/practice";
import { PageContainer } from "../pageContainer";
import { useEffect, useState } from "react";
import { CardContainer } from "../learningCards/styles/learningCards";
import { PracticeCard, PracticeQuestionSelector } from "../index";
import { QuestionTypes } from "../../types";
import { questionDetails } from "../../data";

const Practice = () => {
  // const [startTest, setStartTest] = useState(false);
  // when exam ends, disable buttons

  const [questionList, setQuestionList] = useState(() => getQuestions());
  const [dGQuestionList, setDGQuestionList] = useState(() => getDGQuestions());
  const [combinedQuestionList, setCombinedQuestionList] = useState<
    (QuestionTypes | undefined)[]
  >([]);
  const [questionNumber, setQuestionNumber] = useState<number>(0);
  const [combinedQuestionsDetails, setCombinedQuestionsDetails] = useState({});

  useEffect(() => {
    setCombinedQuestionList([...questionList, ...dGQuestionList]);
  }, [questionList, dGQuestionList]);

  const question = combinedQuestionList[questionNumber];

  useEffect(() => {
    setCombinedQuestionsDetails(
      getCombinedQuestionsDetails(combinedQuestionList, questionDetails)
    );
  }, [combinedQuestionList]);

  return (
    <PageContainer>
      <InstructionContainer>
        <PracticeContainer>
          <PracticeTitle>Practice Test</PracticeTitle>
          <PracticeText>
            Welcome to the Practice Test section. Please read the information
            below carefully before you begin.
          </PracticeText>
          <PracticeText>
            You will be given 40 non-DG and 10 DG questions. All of which will
            be multiple choice with 4 answers to select from. Only one of the
            answer is correct.
          </PracticeText>
          <PracticeText>
            Just like the real examination, you will be timed. Here you will be
            given 1 hour to complete the exam. When the timer runs out, you will
            be automatically directed to the result screen.
          </PracticeText>
          <PracticeText>
            During the test, the question titles in the sidebar on the left will
            be coloured to show which question you have answered (
            <span style={{ color: "var(--green)" }}>Green</span>
            ), marked for review (<span style={{ color: "red" }}>Red</span>) or
            have yet to answer (<span style={{ color: "black" }}>Black</span>
            ). Click on the title of the question you wish to go back to.
          </PracticeText>
          <PracticeText>
            The pass mark will be 80% for both parts. You must get 32/40 non-DG
            and 8/10 DG questions correct to pass. Failing either would mean you
            would have failed the real safety exam.
          </PracticeText>
          <PracticeText>
            You can find all the questions asked here in the "Learn" section, so
            if you get anything wrong, head over there and find the relevant
            question.
          </PracticeText>
          <PracticeText>Good luck.</PracticeText>
          <PracticeButton>Begin</PracticeButton>
        </PracticeContainer>
      </InstructionContainer>
      <CardContainer>
        <PracticeQuestionSelector
          questionList={questionList}
          setQuestionList={setQuestionList}
          dGQuestionList={dGQuestionList}
          setDGQuestionList={setDGQuestionList}
          setQuestionNumber={setQuestionNumber}
          questionNumber={questionNumber}
          combinedQuestionsDetails={combinedQuestionsDetails}
        />
        {question && (
          <PracticeCard
            questionObject={question}
            questionNumber={questionNumber}
            totalNumberOfQuestions={combinedQuestionList.length}
            setCombinedQuestionList={setCombinedQuestionList}
          />
        )}
      </CardContainer>
    </PageContainer>
  );
};

export default Practice;
