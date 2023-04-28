import styled, { css } from "styled-components";

export const StyledInput = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1em;
  label {
    margin-bottom: 0.6em;
    font-weight: bold;
  }
  input {
    padding: 0.7em;
    border-radius: 0;
    border: none;
  }
  input::placeholder {
    color: #7b7b7b;
  }
`;
export const StyledInputForm = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1em;
	input {
		margin-top: 5px;
    padding: 8px;
    border-radius: 10px;
    outline: 0;
    border: 2px solid #415a77;
    color: #222;
    font-weight: 700;
  }
  label {
    display: flex;
    flex-direction: column;
    font-size: 1.2em;
    
  } 
	${({ isErrored }) =>
		isErrored &&
    css`
      color: #c53030;
      border-color: #c53030;
    `}
	
`;
