import styled from "styled-components";

export const StyledFooter = styled.footer`
  background-color: #222;
  color: #fff;
  padding: 3em;
  text-align: center;

  ul {
    display: flex;
    justify-content: center;
    list-style-type: none;
  }
  li {
    margin: 0 1em;
  }
  li:hover {
    color: #ffbb33;
  }
  svg {
    font-size: 1.5em;
    cursor: pointer;
  }
  .copy_right {
    margin-top: 2em;
  }
  span {
    font-weight: bold;
    color: #ffbb33;
  }
`;
