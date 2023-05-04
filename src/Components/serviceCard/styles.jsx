import styled from "styled-components";

export const CardForServices = styled.div`
  width: 220px;
	height: 250px;
	background-color: #e0e1dd;
	border-radius: 10px;
	padding: 5px;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	margin-bottom:3%;
	h1{
		color: #415a77;
		text-align: center;
		border-bottom: 1px solid #415a77;
		padding: 5px 0;
		font-size:1.5em;
	}
	.services{
		font-size: 1em;
		color: #415a77;
		border-bottom: 1px solid #415a77;
		padding: 5px 5px;
		margin: 4% 0;
	}
	.services span{
		font-size: 1.2em;
		color: #1b263b;
		font-weight: 600;
	}
	#description{
		text-align: center;
		border: none;
	}
  .services-button{
		width: 100%;
   	margin-top: 1.2em;
  	display: flex;
		justify-content: center;
    align-items: center;   
  }
	button{
		width: 90%;
		height: 35px;
		border-radius: 10px;
		text-align: center;
		color: #fff;
		background-color: #778da9;
		border: 1px solid #415a77;
		cursor:pointer;
	}
	button:hover{
		background-color: #1b263b;
	}
`;
