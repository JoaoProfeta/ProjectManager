//import { Button } from "./styles";
import { Link } from "react-router-dom";
import { LinkBtn } from "./styles";

export const LinkButton = ({ to, text, txd})=>{


    return(
        <LinkBtn to={to} //txd={txd}
        >
            <div>{text}</div>
        </LinkBtn>
    )


};