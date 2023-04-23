import styled from "styled-components"

export const StyledNav = styled.div`
    display: flex;
    justify-content: space-around;
    background-color:#0d1b2a;
    padding: 1em;
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
<<<<<<< HEAD:src/Components/Navbar/styles.jsx
            
        }
        .logo h1{

=======
>>>>>>> 212c14aee212a4a5530e764be8ff67207f316959:src/Components/Layout/Navbar/styles.jsx
        }
        .link_style{
            text-decoration: none;
            color: #fff;
        }
        .link_style:hover{
<<<<<<< HEAD
            color: #778da9;
            
=======
            color: #ffbb33;  
>>>>>>> d60250c1da021efbb0828b42adfef35b3559b4e6
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
`  