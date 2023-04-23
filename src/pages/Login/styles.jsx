import styled from "styled-components";

export const StyledSign = styled.div`
  height: 75vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
 

  form {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 30%;
    height: 75%;
    background-color: #222;
    padding: 5%;
    border-radius: 10px;
    color: #fff;
    box-shadow: 1px 1px 20px 5px #ffbb33;

  }
  input {
    padding: 5px;
    border-radius: 10px;
    outline: 0;
    border: 2px solid #ffbb33;
    color: #222;
    font-weight: 700;
  }
  button {
    background-color: #ffbb33;
    padding: 5px;
    border-radius: 10px;
  }
  label {
    display: flex;
    flex-direction: column;
    font-size: 1.2em;
    
  } 
  a {
    text-decoration: none;
    color: #ffbb33;
    padding: 5px;
    
  }
  a:hover{
    color: #fff;
    border-radius: 10px;
    border: 2px solid #ffbb33;
  }

`;



export const ButtonCustomized = styled.button`

  ${props => props.disabled === true &&`
     &:hover{
      background-color:#222;
      color:#ffff;
      border:2px solid #ffbb33;
     }
    `
  }
  ${props => props.disabled === true &&`
     &:hover{
      background-color:#222;
      color:#ffff;
      border:2px solid #ffbb33;
     }
    `
  }

`