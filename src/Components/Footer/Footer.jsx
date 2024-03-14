import { NavLink } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer-elements">
                <div className="office-address-division">
                   <h3 className="office-heading">Office Address</h3>
                   <div >
                        <p>Level-6, 56, New York Center, Dilkusha, Dhaka.</p>
                        <p>Support: Web@WeddingEventManagement.com</p>
                        <p>Helpline: 0139359023539</p>
                        <p>(Available: Sat - Thu, 10:00 AM To 7:00 PM)</p>
                   </div>
                </div>
                <div className="useful-links">
                    <h3 className="useful-heading">Useful Available Links</h3>
                    <ul>
                        <NavLink to="/aboutUs"><li>About Us</li></NavLink>
                        <NavLink to="/contact"><li>Contact</li></NavLink>
                        <NavLink to="/booking"><li>Booking</li></NavLink>
                        <NavLink to="/login"><li>Login</li></NavLink>
                    </ul>
                </div>
                <div className="social-media">
                   <h3>Follow Us</h3>
                   <i className="fa-brands fa-facebook"></i>
                   <i className="fa-brands fa-instagram"></i>
                   <i className="fa-brands fa-linkedin"></i>
                   <i className="fa-brands fa-youtube"></i>
                </div>
            </div>
        </div>
    );
};

export default Footer;