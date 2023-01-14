import styled from "styled-components";
import { Button } from "../../learningCards/styles/learningCards";
import {
  Title,
  Text,
  Container as LandingContainer,
} from "../../landing/styles/Landing";

export const InstructionContainer = styled.section``;

export const PracticeTitle = styled(Title)``;

export const PracticeText = styled(Text)``;

export const PracticeContainer = styled(LandingContainer)`
  display: flex;
  flex-direction: column;
`;

export const PracticeButton = styled(Button)`
  align-self: flex-end;

`;
