import styled, { css } from "styled-components";

export const StyledContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin: 0 auto;
  flex-wrap: wrap;
  ${
	({ styleHeight }) =>
		styleHeight &&
      `
        min-height: 75%;`
};
  ${({ start }) => start && css`justify-content:flex-start;
		gap: 3%;
		flex-wrap: wrap;
		`};
  ${({ column }) =>
		column &&
    `justify-content:flex-start;
        flex-direction:column;
        `};
`;
