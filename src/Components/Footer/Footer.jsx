import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { StyledFooter } from "./styles";
export const Footer = () => {
  return (
    <StyledFooter>
      <ul>
        <li>
          <FaFacebook />
        </li>
        <li>
          <FaLinkedin />
        </li>
        <li>
          <FaInstagram />
        </li>
      </ul>
      <p className="copy_right">
        <span>Costs</span> &copy; 2023
      </p>
    </StyledFooter>
  );
};
