import styled from "styled-components";
import { StyledProps } from "../../../types";

export const CardContainer = styled.div`
  position: relative;
  background-color: var(--darker-grey);
  border-radius: 0 4px 4px 0;
  width: 60%;
  text-align: center;
  font-size: var(--fs-md);
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 3rem auto;
`;

export const Title = styled.h1`
  font-size: var(--fs-lg);
`;

export const Question = styled.h2`
  margin: 3rem auto;
  font-size: var(--fs-xxl);
`;

export const SmallText = styled.p`
  font-size: var(--fs-sm);
`;

export const AccordianContainer = styled.div`
  width: 80%;
  margin: 2rem auto 8rem;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

export const AnswerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid black;
  border-radius: 4px 4px 0 0;
  height: 50px;
`;

export const Subtitle = styled.h3`
  margin: 0 2rem;
`;

export const Answer = styled.p<StyledProps>`
  border: 1px solid black;
  border-top: none;
  border-radius: 0 0 4px 4px;

  height: 200px;
  text-align: initial;
  padding: 1rem 2rem;
  display: ${({ active }) => (active ? "block" : "none")};
  animation: fade_in 1s;

  @keyframes fade_in {
    0% {
      opacity: 0;
      transform: translateY(-20%);
    }
    100% {
      opacity: 1;
      transform: translateY(0%);
    }
  }
`;

export const Resources = styled.p`
  position: absolute;
  bottom: 10px;
  margin: 0 auto;
  width: 100%;
`;
