
import styled from "styled-components";

export const SubmitButton = styled.button`
  button {
    background-color: rgb(34, 34, 34);
    color: #fff;
    padding: 0.7em 1.2em;
    text-decoration: none;
    transition: 0.5s;
    cursor: pointer;
    border: none;
  }
  button:hover {
    color: #ffbb33;
  }
  ${(props) => props.disabled === true &&`
     &:hover{
      background-color:#222;
      color:#ffff;
      border:2px solid #1b263b;
     }
    `
}
  ${(props) => props.disabled === true &&`
     &:hover{
      background-color:#1b263b;
      color:#ffff;
      border:2px solid #778da9;
     }
    `
}
`;
