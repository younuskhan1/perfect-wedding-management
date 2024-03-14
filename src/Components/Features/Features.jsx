import "./Features.css";
import effectiveness from "../../assets/effectiveness.png";
import customers from "../../assets/customer-oriented.webp";
import committed from "../../assets/committed.png";
import contingency from "../../assets/contingency.png";

const Features = () => {
    return (
        <div className="container">
            <h1 className="heading-title">Why Will You Choose Us</h1>
            <ul id="cards">
                <li className="card" id="card1">
                    <div className="card-body">
                        <div className="feature-text">
                            <p className="small-heading white">Effective and Efficiency</p>
                            <h1>Effective and Efficiency</h1>
                            <p className="short-description">Effectiveness and efficiency have a lot to do with a business entity. Every business stands to attain its predefined.</p>
                        </div>
                        <div className="feature-logo">
                            <img src={effectiveness} alt="" />
                        </div>
                    </div>
                </li>
                <li className="card" id="card2">
                <div className="card-body">
                        <div className="feature-text purple">
                            <p className="small-heading white">Customer-Oriented</p>
                            <h1>Customer-Oriented</h1>
                            <p className="short-description">Customer orientation means putting your customer’s needs first. While many businesses focus on sales, customers can be put off.</p>
                        </div>
                        <div className="feature-logo">
                            <img src={customers} alt="" />
                        </div>
                    </div>
                </li>
                <li className="card" id="card3">
                <div className="card-body">
                        <div className="feature-text maroon">
                            <p className="small-heading white">Well-Committed Services</p>
                            <h1>Well-Committed Services</h1>
                            <p className="short-description">Commitments are extremely powerful because they influence how you think, how you sound, and how you act which then feeds the perception.</p>
                        </div>
                        <div className="feature-logo">
                            <img src={committed} alt="" />
                        </div>
                    </div>
                </li>
                <li className="card" id="card4">
                <div className="card-body">
                        <div className="feature-text dark-blue">
                            <p className="small-heading white">Contingency-Handler</p>
                            <h1>Contingency-Handler</h1>
                            <p className="short-description">Understanding the importance of a contingency plan can help save your business in an emergency situation.</p>
                        </div>
                        <div className="feature-logo">
                            <img src={contingency} alt="" />
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default Features;