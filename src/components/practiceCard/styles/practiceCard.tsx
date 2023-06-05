import styled from "styled-components";
import { StyledProps } from "../../../types";

export const AnswerContainer = styled.div`
  margin: 0 1rem;
`;

export const Answer = styled.button<StyledProps>`
  display: block;
  padding: 1rem 2rem;
  margin: 0.6rem auto;
  font-size: var(--fs-sm);
  cursor: pointer;
  user-select: none;
  border-radius: var(--border-radius);
  ${({ selected }) => selected && "background-color: #999905;"}
`;
