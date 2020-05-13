// rafce
// # 2
import React from "react";
import { Link } from "gatsby";

// styled components
import { HeaderNav, Logo, Menu } from "../styles/headerStyles";
import { Container, Flex } from "../styles/globalStyles";

const Header = () => {
  return (
    <HeaderNav>
      <Container>
        <Flex spaceBetween noHeight>
          <Logo>
            <Link to="/">Mo</Link>
            <span></span>
            <Link to="/">Magan</Link>
          </Logo>
          <Menu>
            <button>
              <span></span>
              <span></span>
              <span></span>
            </button>
          </Menu>
        </Flex>
      </Container>
    </HeaderNav>
  );
};

export default Header;
