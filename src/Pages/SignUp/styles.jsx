import styled from "styled-components";



export const StyledSignUp = styled.div`
	width: 100vw;
	height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  form {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 400px;
    height: 500px;
    background-color: #0d1b2a;
    padding: 5%;
    border-radius: 10px;
    color: #fff;
    box-shadow: 1px 1px 20px 5px #415a77;

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
  label {
    display: flex;
    flex-direction: column;
    font-size: 1.2em;
    
  } 
  a{
    text-decoration: none;
    color: #778da9;
    padding: 5px;
    
  }
  a:hover{
    color: #415a77;
    border-radius: 10px;

  }
	.sign-button{
		background-color: #778da9;
		padding: 5px;
		border-radius: 5px;
		cursor:pointer;
		border:none;
		font-size: 1.2em;
		color: #fff;
		margin-top: 5px;
	}
	.sign-button:hover{
		background-color: #415a77;
	}
	.error{
		color: red;
		display: block;

	}
  


`;

export const Text = styled.div`
  text-align: center;
`;
