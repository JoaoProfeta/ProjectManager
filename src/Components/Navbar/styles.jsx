import styled from "styled-components";

export const StyledNav = styled.div`
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
        }
        li{
            margin-right: 1em;
        }
        .logo{
            text-decoration: none;
            color: #fff;
            
        }
        .logo h1{

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
        .icon_exit{
            color: #fff;
            align-items: center;
            
        }
        .icon_exit:hover{
            color: #ffbb33;
        }
`;  
