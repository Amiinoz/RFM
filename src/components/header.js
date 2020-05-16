// rafce
// # 2
import React, { useEffect } from "react";
import { Link } from "gatsby";
import { logo } from "../assets/svg/logo.svg";
import { humbergerMenu } from "../assets/svg/humbergerMenu.svg";

// styled components
import { HeaderNav, Logo, Menu } from "../styles/headerStyles";
import { Container, Flex } from "../styles/globalStyles";

// Context
import {
  useGlobalStateContext,
  useGlobalDispatchContext,
} from "../context/glopalContext";

const Header = () => {
  const dispatch = useGlobalDispatchContext();
  const { currentTheme } = useGlobalStateContext();

  const toggleTheme = () => {
    if (currentTheme === "dark") {
      dispatch({ type: "TOGGLE_THEME", theme: "light" });
    } else {
      dispatch({ type: "TOGGLE_THEME", theme: "dark" });
    }
  };

  useEffect(() => {
    window.localStorage.setItem("theme", currentTheme);
  }, [currentTheme]);

  return (
    <HeaderNav
      animate={{ y: 0, opacity: 1 }}
      initial={{ y: -72, opacity: 0 }}
      transition={{ duration: 1, ease: [0.6, 0.05, -0.01, 0.9] }}
    >
      <Container>
        {/* {console.log(currentTheme)} */}
        <Flex spaceBetween noHeight>
          <Logo>
            <Link to="/">
              <span onClick={toggleTheme}>
                <img src={require("../assets/svg/logo.svg")} />
              </span>
            </Link>
          </Logo>
          <Menu>
            <button>
              <span>
                <img src={require("../assets/svg/humbergerMenu.svg")} />
              </span>
            </button>
          </Menu>
        </Flex>
      </Container>
    </HeaderNav>
  );
};

export default Header;
