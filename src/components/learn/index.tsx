import { PageContainer } from "../pageContainer";
import {
  Container,
  TopicContainer,
  Title,
  Description,
  Button,
  Image,
} from "./styles/Learn";
import { topic } from "../../data";

const Learn = () => {
  const renderTopics = topic.map(({ title, description, img, to }) => (
    <TopicContainer key={title}>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Image img={img} />
      <Button to={to}>Begin</Button>
    </TopicContainer>
  ));

  return (
    <PageContainer>
      <Container>{renderTopics}</Container>
    </PageContainer>
  );
};

export default Learn;
