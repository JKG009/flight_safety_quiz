import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavContainer = styled.nav`
  width: 100vw;
  min-width: 500px;
  background-color: var(--green);
  height: 70px;
`;

export const Container = styled.div`
  max-width: var(--max-width);
  display: flex;
  justify-content: space-between;
  margin: auto;
  padding: 0 0.5rem;
  height: 70px;
`;

export const LinksContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  min-width: 300px;
`;

export const StyledLink = styled(Link)`
  color: var(--white);
  text-decoration: none;
  font-size: var(--fs-xl);
`;

export const Logo = styled(Link)`
  background-image: url(/imgs/logo.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  min-width: 120px;
  height: 65px;
  align-self: center;
`;
