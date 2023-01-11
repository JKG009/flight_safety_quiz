import styled from "styled-components";

export const Container = styled.section`
  margin: 0.8rem 1.6rem;
  max-width: var(--max-width);
`;

export const Title = styled.h1`
  font-size: var(--fs-heading);
  text-decoration: underline;
  margin: 0.4rem 0;
`;

export const Text = styled.p`
  font-size: var(--fs-md);
  margin: 0.8rem 0;
  line-height: 1.4;
`;

export const Subtitle = styled.h2`
  font-size: var(--fs-xxl);
`;

export const DisclaimerContainer = styled.ol`
  list-style-position: inside;
`;

export const DisclaimerText = styled.li`
  font-size: var(--fs-md);
  margin: 0.8rem 0;
  line-height: 1.4;
`;
