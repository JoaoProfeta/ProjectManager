import styled from "styled-components";

export const StyledNav = styled.header`
  display: flex;
  justify-content: space-around;
  background-color:#0d1b2a;
  padding: 1em;
	width: 100%;
  ul{
    display: flex;
    list-style: none;
    align-items: center;
    justify-content: space-around;
    flex-direction: row;
		padding: 1%;
  }
  li{
    margin-right: 1em;
  }
  .logo{
    text-decoration: none;
    color: #fff;    
		padding: 1%;
  }
  .link_style{
    text-decoration: none;
    color: #fff;
  }
  .link_style:hover{
    color: #778da9;     
  }
  .active{
    text-decoration: none;
    border-bottom: solid 2px #415a77;
    color: #778da9;
    border-radius: 0 0 4px 4px;
  }
  .icon-exit{
		color: #fff;
		align-items: center;
		cursor: pointer;
            
  }
  .icon-exit:hover{
    color: #415a77;
  }
	@media (max-width:521px){
	
		ul{
			margin:2% 0;
		}
	}
`;  
