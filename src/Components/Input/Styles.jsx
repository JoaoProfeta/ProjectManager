import styled from "styled-components";

export const StyledInput = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1em;
  label {
    margin-bottom: 0.6em;
    font-weight: bold;
  }
  input {
		margin-top: 5px;
    padding: 8px;
    border-radius: 10px;
    outline: 0;
    border: 2px solid #415a77;
    color: #222;
    font-weight: 700;
  }
  
	label{
		text-align: start;
		color: #e0e1dd;
	}
`;

