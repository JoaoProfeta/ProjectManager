import styled from "styled-components";


export const StyledSection = styled.section`  
    width: 100%;
    font-size: 1.5em;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-weight: 500;
    color: #fff;
    div{
        width: 40%;
        padding: 1%;
    }
		
    .divBtn{
        margin-top: 5%;
    }
    img{
        max-width: 400px;
    }
		a{
			background-color: #778da9;
		}
		@media (max-width:830px) {
			&{
				font-size: 1.2em;
				font-weight: 200;
				justify-content: space-between;
			}
			img{
				max-width: 200px;
			}
			
		}
		@media (max-width:640px) {
			&{
				display: flex;
				flex-direction: column;
				font-size: 1.2em;

			}
			div{
				width: 90%;
				display: flex;
				justify-content: center;

			}
			div.add-order-1{
				order: 2;
			}

		}
   
`;

