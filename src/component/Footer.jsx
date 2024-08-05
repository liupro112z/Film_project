import logo from '../img/logoweb.png'
import {AiOutlineMail} from 'react-icons/ai'
import {BsFacebook} from 'react-icons/bs'
import {AiOutlineInstagram} from 'react-icons/ai'
import {BsFillTelephoneFill} from 'react-icons/bs'
import './Footer.css'
export default function Footer(){
    return (
            <div className="foot">
                <div className="footer-info">
                        <img src={logo} />
                    <div className="footer-introduce">
                        <p className='footer-introduce-name'>Phimhay.com</p>
                        <p className='footer-introduce-text'>Website xem phim miễn phí</p>
                    </div>
                </div>
                <div className="info-contact">
                    <p>CONTACT US</p>
                    <div className="contact-icon">
                        <a href="mailto:phimhay@gmail.com"> <AiOutlineMail/></a>
                        <a href="#"><BsFacebook/></a>
                        <a href="#"><AiOutlineInstagram/></a>
                    </div>
                    <div className="contact-telephone">
                        <p><BsFillTelephoneFill/>: 92237367</p>
                    </div>
                </div>
            </div>
    )
}