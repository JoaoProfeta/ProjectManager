import styled from "styled-components";



export const StyledSignUp = styled.div`
    
  height: 75vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  form{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 30%;
    height: 90%;
    background-color: #222;
    padding: 5%;
    border-radius: 10px;
    color: #fff;
		box-shadow: 1px 1px 20px 5px #415a77;

  }
	button{
    background-color: #415a77;
    padding: 5px;
    border-radius: 10px;
  }
  a{
    text-decoration: none;
    color: #778da9;
    padding: 4px;
		margin-left: 3px;
    
  }
  a:hover{
    color: #fff;
    border-radius: 10px;
    border: 2px solid #415a77;
  }
  


`;

export const Text = styled.div`
  text-align: center;
`;
