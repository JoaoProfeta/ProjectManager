import styled from "styled-components";

export const StyledFooter = styled.footer`
  background-color: #0d1b2a;
  color: #fff;
  padding: 20px;
  text-align: center;
	display: flex;
	flex-direction: row;
	justify-content: space-around;

  span {
		font-size: 1.2em;
    font-weight: bold;
    color: #778da9;
  }
	p{
		font-size: 1.3em;
		color: #778da9;
	}
	.contact{
		list-style: none;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
	}
	.contact li{
		margin-top: 5px;
	}
	.social{
		list-style: none;
		display: flex;
		flex-direction: row;
	}
	.social li{
		margin:10px 10px 0 0;
		font-size: 2em;
		cursor: pointer;
	}
	.social li:hover{
		color: #778da9;
	}
`;
