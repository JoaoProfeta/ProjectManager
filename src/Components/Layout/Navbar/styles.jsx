import styled from "styled-components"

export const Nav = styled.div`
    display: flex;
    justify-content: space-between;
    background-color:#222;
    padding: 1em;
        ul{
            display: flex;
            list-style: none;
            align-items: center;
        }
        li{
            margin-right: 1em;
        }
        .link_style{
            text-decoration: none;
            color: #fff;

        }
        .link_style:hover{
            color: #ffbb33;
        }

        .active{
            text-decoration: none;
            border-bottom: solid 2px #ffbb33;
            color: #ffbb33;
            border-radius: 0 0 4px 4px;
        }
        



`