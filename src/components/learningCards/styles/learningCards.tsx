import styled from "styled-components";

export const Container = styled.div`
  margin: auto;
  margin-top: 50px;
`;

export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  min-height: 700px;
`;

export const SideContainer = styled.aside`
  width: 30%;
  background-color: lightcoral;
  border-radius: 4px 0 0 4px;
`;

export const ButtonContainer = styled.div`
  width: 60%;
  margin: 1rem auto;
  display: flex;
  justify-content: space-between;
`;

export const Button = styled.button`
  font-size: var(--fs-lg);
  background-color: var(--green);
  color: var(--white);
  padding: 0.6rem 1.2rem;
  border: none;
  border-radius: var(--border-radius);
  transition: var(--transition-ease);
  cursor: pointer;

  :hover {
    box-shadow: rgba(0, 100, 90, 1) 0 4px 12px;
    transform: translateY(-3px);
  }
  :active {
    transform: translateY(0);
    box-shadow: rgba(0, 100, 90, 1) 0 2px 4px;
  }

  :disabled {
    background-color: var(--darker-grey);
  }

  :disabled&:hover {
    transform: none;
    box-shadow: none;
    cursor: default;
  }
`;
