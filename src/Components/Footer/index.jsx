import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FooterArea } from "./styles";
export const Footer = () => {
  return (
    <FooterArea>
      <div>
          <p>Contact</p>
        <ul className="contact">
          <li>E-mail: managerprojects@hotmail.com</li>
          <li>Tel: (99)88999-0099</li>
          <li>Fix: 0800 000000</li>
        </ul>
      </div>
      <div className="copy_right">
        <span>Todos os direitos reservados</span> &copy; 2023
      </div>
      <div>
        <p>Social networks</p>
        <ul className="social">
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
      </div>
      
    </FooterArea>
  );
};
