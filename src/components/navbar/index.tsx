import {
  Container,
  LinksContainer,
  StyledLink,
  Logo,
  NavContainer,
} from "./styles/Navbar";

const Navbar = () => {
  return (
    <NavContainer>
      <Container>
        <LinksContainer>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/learn">Learn</StyledLink>
          <StyledLink to="/practice">Practice</StyledLink>
        </LinksContainer>
        <Logo to="/" />
      </Container>
    </NavContainer>
  );
};

export default Navbar;
