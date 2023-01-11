import styled from "styled-components";
import { Link } from "react-router-dom";
import { StyledProps } from "../../../types";

export const Container = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(365px, 1fr));
  row-gap: 40px;
  margin-top: 50px;
`;

export const TopicContainer = styled.div`
  position: relative;
  background-color: var(--darker-grey);
  border-radius: var(--border-radius);
  box-shadow: #757575 0 4px 12px;
  padding: 1rem 2rem;
  height: 350px;
  width: 350px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: auto;
`;

export const Title = styled.h1`
  font-size: var(--fs-heading);
`;

export const Description = styled.p`
  font-size: var(--fs-md);
`;

export const Image = styled.div<StyledProps>`
  ${({ img }) => img && `background-image: url(${img});`}
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  height: 200px;
  width: 200px;
  position: absolute;
  top: 40px;
  right: 40px;
  opacity: 0.2;
  border: none;
`;

export const Button = styled(Link)`
  font-size: var(--fs-lg);
  align-self: flex-end;
  text-decoration: none;
  background-color: var(--green);
  color: var(--white);
  padding: 0.6rem 1.2rem;
  border-radius: var(--border-radius);
  transition: var(--transition-ease);
  :hover {
    box-shadow: rgba(0, 100, 90, 1) 0 4px 12px;
    transform: translateY(-3px);
  }
  :active {
    transform: translateY(0);
    box-shadow: rgba(0, 100, 90, 1) 0 2px 4px;
  }
`;
