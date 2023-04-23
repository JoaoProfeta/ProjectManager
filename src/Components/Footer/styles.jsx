import styled from "styled-components";

export const FooterArea = styled.footer`
  width: 100%;
  background-color: #0d1b2a;
  color: #fff;
  padding: 3em;
  text-align: center;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  div{
    width: 30%;
  }
  .contact{
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items:start;
    padding: 3%;
 
  }
  p{
    font-size: 1.3em;
    color: #fff;
  }
  ul {
    display: flex;
    justify-content: center;
    list-style-type: none;
  }
  li {
    margin:.5em;
  }
  li:hover {
    color: #778da9;
 
  }
  .social{
    padding: 3%;
  }
  svg {
    font-size: 1.5em;
    cursor: pointer;
  }
  .copy_right {
    margin-top: 2em;
    text-align: center;
   
  }
  .copy_right span{
    color: #778da9;
    font-size: 1.2em;
  }
`;
