import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { FooterArea } from './styles'
export const Footer = () => {



    return (
        <FooterArea>
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
            <p className='copy_right'><span>Costs</span> &copy; 2023</p>

        </FooterArea>
    )
}