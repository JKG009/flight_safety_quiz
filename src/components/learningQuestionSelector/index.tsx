import { QuestionTypes } from "../../types";
import {
  Button,
  Container,
  Questions,
  Question,
  Title,
} from "./styles/learningQuestionSelector";

interface Props {
  setQuestionNumber: React.Dispatch<React.SetStateAction<number>>;
  topic: string;
  questions: (QuestionTypes | undefined)[];
  questionNumber: number;
}

const LearningQuestionSelector = ({
  setQuestionNumber,
  questions,
  topic,
  questionNumber,
}: Props) => {
  return (
    <Container>
      <Title>{topic.replace(/_/g, " ")}</Title>
      <Questions>
        {questions.map((question, index) => {
          return question?.title && (
            <Question>
              <Button
                currentQuestion={questionNumber === index}
                onClick={() => setQuestionNumber(index)}
              >
                {question.title}
              </Button>
            </Question>
          );
        })}
      </Questions>
    </Container>
  );
};

export default LearningQuestionSelector;
