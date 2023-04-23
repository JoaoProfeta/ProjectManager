//import { Button } from "./styles";
import { Link } from "react-router-dom";
import { LinkBtn } from "./styles";

export const LinkButton = ({ to, text }) => {
  return (
    <LinkBtn
      to={to}
    >
    {text}
    </LinkBtn>
  );
};
