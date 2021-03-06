import styled, { css } from "styled-components";

export const Container = styled.div`
flex-grow: 1;
margin: 0 auto;
padding: 0 32px;
position: relative;
width: auto;
height: 100%;
}
@media (min-width: 1024px) {
	max-widht: 960px;
}
@media (min-width: 1216px) {
	max-widht: 1152px;
}
@media (min-width: 1408px) {
	max-widht: 1244px;
}
}

  // to change fluid
  ${(props) =>
    props.fluid &&
    css`
      padding: 0;
      margin: 0;
      max-widht: 100%;
    `}
`;

export const Flex = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  ${(props) =>
    props.spaceBetween &&
    css`
      justify-content: space-between;
    `}
		${(props) =>
      props.flexEnd &&
      css`
        justify-content: flex-end;
      `}
			${(props) =>
        props.alignTop &&
        css`
          align-items: flex-start;
        `}
				${(props) =>
          props.noHeight &&
          css`
            height: 0;
          `}
`;

// Custtome Cursor
export const Cursor = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 32px;
  height: 32px;
  background: #ea281e;
  border-radius: 100%;
  transform: translate(-50%, -50%);
  transition: all 0.1s ease-out;
  transition-property: width, height, border;
  will-change: width, height, transform, border;
  pointer-events: none;
  z-index: 999;
`;
