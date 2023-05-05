import { Link } from "react-router-dom";
import styled from "styled-components";

export const LinkBtn = styled(Link)`
  background: #fff;
  color: #222;
  padding: 0.5em 1em;
  border-radius: 10px;
  text-decoration: none;
  div {
    transition: 0.5s;
  }
  div:hover {
    color: #778da9;
  }
`;
