import styled from "styled-components";


export const EditCard = styled.div`
    padding: 2em;

		width: 100%;
		min-height: 75vh;
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 10%;
		form{
			display: flex;
			flex-direction: column;
			justify-content: space-around;
			width: 400px;
			height: 400px;
			background-color: #0d1b2a;
			padding: 5%;
			border-radius: 10px;
			color: #fff;
			box-shadow: 1px 1px 20px 5px #415a77;
		}
		button{
			width:100%;
			height: 35px;
			border-radius: 10px;
			text-align: center;
			color: #fff;
			background-color: #778da9;
			border: 1px solid #415a77;
			cursor:pointer;
			margin: 0 auto;
		}
		button:hover{
		background-color: #1b263b;
		}

    
`;
