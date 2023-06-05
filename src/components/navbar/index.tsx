import {
  Container,
  LinksContainer,
  StyledLink,
  Logo,
  NavContainer,
} from "./styles/Navbar";
import { useState } from "react";

const Navbar = () => {
  const [selectedTab, setSelectedTab] = useState<string>(
    window.location.pathname
  );
  const handleNavClick = (link:string) => {
    setSelectedTab(link)
  }

  return (
    <NavContainer>
      <Container>
        <LinksContainer>
          <StyledLink
            selectedTab={selectedTab === "/"}
            to="/"
            onClick={() => handleNavClick("/")}
          >
            Home
          </StyledLink>
          <StyledLink
            selectedTab={selectedTab === "/learn"}
            to="/learn"
            onClick={() => handleNavClick("/learn")}
          >
            Learn
          </StyledLink>
          <StyledLink
            selectedTab={selectedTab === "/practice"}
            to="/practice"
            onClick={() => handleNavClick("/practice")}
          >
            Practice
          </StyledLink>
        </LinksContainer>
        <Logo to="/" />
      </Container>
    </NavContainer>
  );
};

export default Navbar;
