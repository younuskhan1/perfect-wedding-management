import "./MainServices.css";

import bouBhat from "../../assets/bou-bhat.jpg";
import engagement from "../../assets/engagement.jpg";
import marriage from "../../assets/marriage.jpg";
import gayeHolud from "../../assets/gaye-holud.jpg";

const MainServices = () => {
    return (
        <div>
            <h1 className="main-services-heading">Our Main Services</h1>
            <p className="main-service-description">We work basically focusing on four types to functions such as 1. Wedding Ceremony 2. Engagement Ceremony 3. Gaye Holud Ceremony 4. Reception Ceremony. In objectives of arranging these four functions we provide supporting services so that the functions can be arranged in effective and efficient manner as our customer demand. We always emphasize on the customer requirements because customer is our life-line to us.</p>
            <div className="parent-div">
                <div className="item-area">
                    <div className="single-item">
                        <img src={engagement} alt=""/>
                        <div className="item-text">
                            <h2>Engagement Ceremony</h2>
                        </div>
                    </div>
                    <div className="single-item">
                        <img src={gayeHolud} alt=""/>
                        <div className="item-text">
                            <h2>Gaye Holud Ceremony</h2>
                        </div>
                    </div>
                    <div className="single-item">
                        <img src={marriage} alt=""/>
                        <div className="item-text">
                            <h2>Marriage Ceremony</h2>
                        </div>
                    </div>
                    <div className="single-item">
                        <img src={bouBhat} alt=""/>
                        <div className="item-text">
                            <h2>Reception Ceremony</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainServices;