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
import {
  CardContainer,
  ButtonContainer,
  Button,
  Container,
} from "../learningCards/styles/learningCards";
import { PracticeCard, PracticeQuestionSelector } from "../index";
import { Question, CombinedQuestionDetails } from "../../types";
import { questionDetails } from "../../data";

const Practice = () => {
  const [startTest, setStartTest] = useState(false);
  const [endTest, setEndTest] = useState(false);

  const [questionList, setQuestionList] = useState<Question[]>(() =>
    getQuestions()
  );
  const [dGQuestionList, setDGQuestionList] = useState<Question[]>(() =>
    getDGQuestions()
  );
  const [combinedQuestionList, setCombinedQuestionList] = useState<Question[]>(
    []
  );
  const [questionNumber, setQuestionNumber] = useState<number>(0);
  const [combinedQuestionsDetails, setCombinedQuestionsDetails] =
    useState<CombinedQuestionDetails>({});

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
      {!startTest && (
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
              Just like the real examination, you will be timed. Here you will
              be given 1 hour to complete the exam. When the timer runs out, you
              will be automatically directed to the result screen.
            </PracticeText>
            <PracticeText>
              During the test, the question titles in the sidebar on the left
              will be coloured to show which question you have answered (
              <span style={{ color: "var(--green)" }}>Green</span>
              ), marked for review (<span style={{ color: "red" }}>Red</span>)
              or have yet to answer (
              <span style={{ color: "black" }}>Black</span>
              ). Click on the title of the question you wish to go back to.
            </PracticeText>
            <PracticeText>
              The pass mark will be 80% for both parts. You must get 32/40
              non-DG and 8/10 DG questions correct to pass. Failing either would
              mean you would have failed the real safety exam.
            </PracticeText>
            <PracticeText>
              You can find all the questions asked here in the "Learn" section,
              so if you get anything wrong, head over there and find the
              relevant question.
            </PracticeText>
            <PracticeText>Good luck.</PracticeText>
            <PracticeButton
              onClick={() => {
                setStartTest(true);
              }}
            >
              Begin
            </PracticeButton>
          </PracticeContainer>
        </InstructionContainer>
      )}
      {startTest && (
        <Container>
          <CardContainer>
            <PracticeQuestionSelector
              questionList={questionList}
              setQuestionList={setQuestionList}
              dGQuestionList={dGQuestionList}
              setDGQuestionList={setDGQuestionList}
              setQuestionNumber={setQuestionNumber}
              questionNumber={questionNumber}
              combinedQuestionsDetails={combinedQuestionsDetails}
              endTest={endTest}
            />
            {question && (
              <PracticeCard
                questionObject={question}
                questionNumber={questionNumber}
                totalNumberOfQuestions={combinedQuestionList.length}
                setCombinedQuestionList={setCombinedQuestionList}
                combinedQuestionsDetails={combinedQuestionsDetails}
                setCombinedQuestionsDetails={setCombinedQuestionsDetails}
                endTest={endTest}
                dGQuestionList={dGQuestionList}
                startTest={startTest}
                setEndTest={setEndTest}
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
            {!endTest && (
              <Button
                onClick={() => {
                  setCombinedQuestionsDetails((state) => ({
                    ...state,
                    [question.title]: {
                      ...state[question.title],
                      flagged: true,
                    },
                  }));
                }}
              >
                Mark for Review
              </Button>
            )}
            <Button
              disabled={questionNumber >= combinedQuestionList.length - 1}
              onClick={() => {
                setQuestionNumber(questionNumber + 1);
              }}
            >
              Next
            </Button>
            <Button
              onClick={() => {
                setEndTest(true);
              }}
            >
              End Test
            </Button>
          </ButtonContainer>
        </Container>
      )}
    </PageContainer>
  );
};

export default Practice;
