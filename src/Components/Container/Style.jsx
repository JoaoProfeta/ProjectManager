import styled from "styled-components";

export const StyledContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  flex-wrap: wrap;

  ${
	({ styleHeight }) =>
		styleHeight &&
      `
        min-height: 75%;`
	//destruction pt exposed 2 >>>>
};
  ${({ start }) => start && "justify-content:flex-start;"};

  ${({ column }) =>
		column &&
    `justify-content:flex-start;
        flex-direction:column;
        `};
`;
