import { PageContainer } from "../pageContainer";
import {
  Container,
  Title,
  Text,
  DisclaimerContainer,
  DisclaimerText,
  Subtitle,
} from "./styles/Landing";

const Landing = () => {
  return (
    <PageContainer>
      <Container>
        <Title>About</Title>
        <Text>
          This is a quiz application designed specifically to study and practice
          answering various safety questions.
        </Text>
        <Text>
          Currently the topics included are General Procedures, First
          Aid/Illnesses, Dangerous Goods (DG), A350 & B777. Equipment Operation
          is not included as the answers are too long, therefore you should
          refer to the manual.
        </Text>
      </Container>
      <Container>
        <Title>How to use</Title>
        <Subtitle>Learn</Subtitle>
        <Text>
          In the "Learn" section, select the topic you want to study. Here you
          will be given practice questions along with its answer and relevant
          chapter of the manual where you can find more details if you wish to
          learn more.
        </Text>
        <Subtitle>Practice</Subtitle>
        <Text>
          In the "Practice" section, you will be given a timed exam (1hr). Once
          the timer runs out, the exam is finished.
        </Text>
        <Text>
          You will be given 40 non-DG and 10 DG questions. All of which will be
          multiple choice with 4 answers to select from. Only one of the answer
          is correct.
        </Text>
        <Text>
          The pass mark will be 80% for both parts. Failing either one would
          mean you would have failed the real safety exam.
        </Text>
        <Text>
          All the questions given here will be taken from the "Learn" section.
        </Text>
      </Container>
      <Container>
        <Title>Disclaimer</Title>
        <DisclaimerContainer>
          <DisclaimerText>
            This application does not state which airline these questions are
            for due to security reasons. And to also prevent disciplinary action
            against the application creator. But if you were forwarded the link
            to this website then you may (or may not) assume that this
            application is suitable for your safety exam. All similarities are
            purely coincidental.
          </DisclaimerText>
          <DisclaimerText>
            The questions listed here are not from a secret list. They are all
            coming from past experience and by going through <i>"THE" </i>
            manual. There will be questions in the exam that are not covered
            here, and the questions here are not guaranteed to appear in your
            exam. This application only acts as a supplement to your revision.
          </DisclaimerText>
          <DisclaimerText>
            I am but one human being who hand selected and typed the questions
            and answers. The answers to the questions should be correct but if
            you see any mistakes, please post in
            <i>"THE"</i> group chat on Whatsapp of the mistake with the correct
            answer along with where you found the answer in the manual and I
            will amend it as soon as possible.
          </DisclaimerText>
          <DisclaimerText>
            Lastly, I am NOT responsible if you fail. By using this application,
            you are agreeing that you understand this completely.
          </DisclaimerText>
        </DisclaimerContainer>
      </Container>
    </PageContainer>
  );
};

export default Landing;
