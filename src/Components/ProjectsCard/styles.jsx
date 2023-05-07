import styled from "styled-components";


export const StyledProjectCard = styled.div`
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
	.projects{
		font-size: 1em;
		color: #415a77;
		border-bottom: 1px solid #415a77;
		padding: 5px 0;
	}
	.projects span{
		font-size: 1.2em;
		color: #1b263b;
		font-weight: 600;
	}
	button{
		width:60px;
		color: #fff;
		height: 35px;
		padding: 2px;
		border-style: none;
		border-radius:5px;
		background-color: #415a77;
		cursor: pointer;
		
	}
	button:hover{
		background-color: #1b263b;
	}
	.buttons-container{
		display: flex;
		flex-direction: row;
		justify-content: space-around;
	}
	a{
		width: 60px;
	}

	

`;
