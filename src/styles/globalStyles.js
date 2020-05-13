import styled, { css } from "styled-components";

export const Container = styled.div`
  flex-grow: 1;
  margin: 0 auto;
  padding: 0 32px;
  postion: relative;
  width: auto;
  height: 100%;

  @media (min-width: 1024px) {
    max-widht: 960px;
  }
  @media (min-width: 1216px) {
    max-widht: 1152px;
  }
  @media (min-width: 1408px) {
    max-widht: 1244px;
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
  positon: relative;
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
          align-items: top;
        `}
				${(props) =>
          props.noHeight &&
          css`
            height: 0;
          `}
`;
