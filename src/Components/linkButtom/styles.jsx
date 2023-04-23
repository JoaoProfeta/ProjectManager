import { Link } from "react-router-dom";
import styled from "styled-components";

export const LinkBtn = styled(Link)`
  background: #222;
  color: #fff;
  padding: 0.5em 1em;
  border-radius: 10px;
  /*usando com o props ( txd )  >> text-decoration: ${(props) =>
		props.txd ? "none" : "outline"};*/
  text-decoration: none;

  div {
    transition: 0.5s;
  }
  div:hover {
    color: #ffbb33;
  }
`;

/*export const Button = styled.div`
    background: #222;
    color: #fff;
    padding: 0.5em 1em;
    text-decoration: none;
    transition: 0.5s;

    ${({txd
    
       

        div:hover{
            color: #ffbb33;
        }
    
`*/
