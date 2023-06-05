import styled from "styled-components";
import { StyledProps } from "../../../types";

export const Container = styled.aside`
  width: 30%;
  background-color: var(--darker-grey);
  border-radius: 10px 0 0 10px;

  direction: rtl;
  overflow: auto;
  ::-webkit-scrollbar {
    background: transparent;
    width: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background: rgb(128, 128, 128);
    border-radius: 5px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: rgba(128, 128, 128, 0.603);
  }
`;

export const Title = styled.h1`
  margin: 1rem 2rem;
  text-transform: capitalize;
  font-size: var(--fs-xxl);
  direction: ltr;
`;

export const Questions = styled.ol`
  list-style-position: inside;
  margin: 0 2rem;
  font-size: var(--fs-md);
  direction: ltr;
`;

export const Question = styled.li`
  margin: 0.6rem 0;
`;

export const Button = styled.a<StyledProps>`
  ${({ currentQuestion }) => currentQuestion && "color: var(--white);"}
  cursor: pointer;
  transition: var(--transition-ease);
  :hover,
  :active {
    color: var(--white);
  }
`;
