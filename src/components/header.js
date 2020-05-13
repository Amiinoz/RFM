// rafce
// # 2
import React from "react";

// styled components
import { HeaderNav, Logo, Menu } from "../styles/headerStyles";
import { Container, Flex } from "../styles/globalStyles";

const Header = () => {
  return (
    <HeaderNav>
      <Container>
        <Flex spacebetween noHeight>
          <Logo>Logo</Logo>
          <Menu>
            <button>
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
