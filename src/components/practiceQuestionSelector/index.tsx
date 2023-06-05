import {
  PracticeQuestionSelectorContainer as Container,
  PracticeQuestionSelectorTitle as Title,
  PracticeQuestionSelectorQuestions as Questions,
  PracticeQuestionSelectorQuestion as Question,
  PracticeQuestionSelectorButton as Button,
  PracticeQuestionSelectorSubtitle as Subtitle,
  PracticeQuestionSelectorText as Text,
} from "./styles/practiceQuestionSelector";
import { CombinedQuestionDetails, Question as QuestionType } from "../../types";
import { NUMBER_OF_QUESTIONS } from "../../config";

export interface PracticeQuestionProps {
  questionList: QuestionType[];
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
  dGQuestionList: QuestionType[];
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
  combinedQuestionsDetails: CombinedQuestionDetails;
  endTest: boolean;
}

const PracticeQuestionSelector = ({
  questionList,
  setQuestionList,
  dGQuestionList,
  setDGQuestionList,
  setQuestionNumber,
  questionNumber,
  combinedQuestionsDetails,
  endTest,
}: PracticeQuestionProps) => {
  return (
    <Container>
      <Title>Exam</Title>
      <Questions>
        <Subtitle>Non Dangerous Goods</Subtitle>
        {questionList.map(({ title }, index) => {
          return (
            <Question>
              <Button
                currentQuestion={questionNumber === index}
                onClick={() => setQuestionNumber(index)}
                endTest={endTest}
              >
                {title}
                {endTest ? (
                  combinedQuestionsDetails[title]?.answeredCorrectly ? (
                    <Text status="green"> [Correct]</Text>
                  ) : (
                    <Text status="red"> [Incorrect]</Text>
                  )
                ) : (
                  <>
                    {combinedQuestionsDetails[title]?.answeredCorrectly !==
                      null && <Text status="green"> [Answered]</Text>}
                    {combinedQuestionsDetails[title]?.flagged && (
                      <Text status="red"> [Marked for review]</Text>
                    )}
                  </>
                )}
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
              onClick={() => setQuestionNumber(NUMBER_OF_QUESTIONS + index)}
              endTest={endTest}
            >
              {title}
              {endTest ? (
                combinedQuestionsDetails[title]?.answeredCorrectly ? (
                  <Text status="green"> [Correct]</Text>
                ) : (
                  <Text status="red"> [Incorrect]</Text>
                )
              ) : (
                <>
                  {combinedQuestionsDetails[title]?.answeredCorrectly !==
                    null && <Text status="green"> [Answered]</Text>}
                  {combinedQuestionsDetails[title]?.flagged && (
                    <Text status="red"> [Marked for review]</Text>
                  )}
                </>
              )}
            </Button>
          </Question>
        ))}
      </Questions>
    </Container>
  );
};

export default PracticeQuestionSelector;
