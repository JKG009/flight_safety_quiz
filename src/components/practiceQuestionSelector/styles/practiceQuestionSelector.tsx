import styled from "styled-components";
import { StyledProps } from "../../../types";
import {
  Button as LearningQuestionSelectorButton,
  Container as LearningQuestionSelectorContainer,
  Questions as LearningQuestionSelectorQuestions,
  Question as LearningQuestionSelectorQuestion,
  Title as LearningQuestionSelectorTitle,
} from "../../learningQuestionSelector/styles/learningQuestionSelector";

export const PracticeQuestionSelectorContainer = styled(
  LearningQuestionSelectorContainer
)``;

export const PracticeQuestionSelectorTitle = styled(
  LearningQuestionSelectorTitle
)``;

export const PracticeQuestionSelectorQuestions = styled(
  LearningQuestionSelectorQuestions
)``;

export const PracticeQuestionSelectorQuestion = styled(
  LearningQuestionSelectorQuestion
)``;

export const PracticeQuestionSelectorButton = styled(
  LearningQuestionSelectorButton
)`
  ${({ endTest }) => endTest && `pointer-events: none; color: black;`}
`;

export const PracticeQuestionSelectorSubtitle = styled.h2`
  font-size: var(--fs-md);
  margin: 1rem 0;
`;

export const PracticeQuestionSelectorText = styled.span<StyledProps>`
  color: ${({ status }) => status};
`;
