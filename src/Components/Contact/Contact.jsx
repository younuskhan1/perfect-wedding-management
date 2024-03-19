import "./Contact.css";
import contactUs from "../../aboutUsImages/contact.jpg";

const Contact = () => {
    return (
        <div>
            <div className="contact-us-img-container">
                <img src={contactUs} alt="" />
            </div>
            <div>
                <div className="corporate-office-address-container">
                    <div className="corporate-heading">
                        <h3>CORPORATE OFFICE</h3>
                    </div>
                    <div className="corporate-address">
                        <div>
                            <h3>Bulus Center</h3>
                            <p>Plot - CWS- (A)-1</p>
                            <p>Road No - 34</p>
                            <p>Gulshan Avenue, Dhaka-1212</p>
                            <p>Phone +88-02-55668070</p>
                            <p className="phone-aside"> +88-09610999999</p>
                            <p>Fax +88-02-55668070-6000</p>
                            <p className="fax-aside">+88-09610999911-5200</p>
                            <p>Fax +88-02-55668070-3000</p>
                            <p>E-Mail perwed@mgt.com.bd</p>
                        </div>
                    </div>
                </div>
                <div className="it-division-container">
                    <div className="it-division-heading">
                        <h3>Information Technology Division</h3>
                    </div>
                    <div className="it-division-address">
                        <div>
                            <h3>Yunus Center</h3>
                            <p>Plot - CWS- (A)-1</p>
                            <p>Road No - 54</p>
                            <p>Gulshan Avenue, Dhaka-1212</p>
                            <p>Phone +88-02-55668070</p>
                            <p className="phone-aside"> +88-09610999999</p>
                            <p>Fax +88-02-55668070-6000</p>
                            <p className="fax-aside">+88-09610999911-5200</p>
                            <p>Fax +88-02-55668070-3000</p>
                            <p>E-Mail perwed@mgt.com.bd</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;