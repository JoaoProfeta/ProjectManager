import styled from "styled-components";


export const FormForService = styled.div`
     width: 100%;
     margin:2em 0;
		 min-height: 75vh;
		 display: flex;
		 flex-direction: row;
		 flex-wrap: wrap;
		 justify-content: center;
		 align-items: end;
		 
	form {
    display: flex;
    flex-direction: row;
		flex-wrap: wrap;
    justify-content: flex-start;
		align-items: center;
		gap:4% ;
    width: 85%;
    background-color: #0d1b2a;
    padding: 2%;
    border-radius: 10px;
    color: #fff;
    box-shadow: 1px 1px 20px 5px #415a77;

  }
	#services-container{
		width: 100%;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		gap: 5%;
		padding: 3%;
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
		width: 48%;
    display: flex;
    flex-direction: column;
		
    font-size: 1.2em;
    
  } 
	#description-label{
		width: 85%;
		height: 30%;
	}
	#description{
		height: 100%;
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
	.create-service{
		width: 100px;
		height: 60px;
		background-color: #778da9;
		padding: 5px;
		border-radius: 5px;
		cursor:pointer;
		border:none;
		font-size: 1.2em;
		color: #fff;
		margin-top: 2%;
	}
	.create-service:hover{
		background-color: #415a77;
	}
	
`;
