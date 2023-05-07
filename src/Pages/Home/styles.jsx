import styled from "styled-components";

export const StyledHome = styled.section`
    
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 4em;
    background-color: #1b263b;

    h1{
      font-size: 2.5em;
      margin-bottom: .5em;
      color: #fff;
    }
    h1 span{
      color: #778da9;
      padding:0.2em ;

     	}
    p {
      margin-bottom: 1.5em;
      color: #7b7b7b;
    }
    img {
      width: 350px;
      margin:2em 0;
    }
		@media (max-width:830px) {
			h1{
				font-size: 1.5em;
			}
		}
		@media (max-width:640px) {
			h1{
				width: 100%;
				font-size: 1.2em;
			}
		}

`;
