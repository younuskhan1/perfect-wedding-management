import "./Venues.css";
import sonargaon from "../../venues-images/sonargaon.jpg";
import intercontinental from "../../venues-images/intercontinental.jpg";
import radisson from "../../venues-images/radisson.jpg";
import westine from "../../venues-images/westine.jpg";
import grandSultan from "../../venues-images/grand-sultan.jpg";
import momoIn from "../../venues-images/momo-inn.jpg";
import laMaridian from "../../venues-images/laMeridian.jpg";
import regency from "../../venues-images/regency.jpg";

const Venues = () => {
    return (
        <div>
            <h1 className="venues-heading">Our Available Venues</h1>
            <p className="venues-description">Certain types of venues offer overnight accommodations, for example, while others focus solely on the event space. While some venues are flexible, with the ability to accommodate a variety of event styles, others are designed to accommodate a specific event niche, such as weddings or government events.</p>
            <div className="venue-container">
                <div className="venue-card">
                    <img src={sonargaon} alt="" />
                    <h4>Pan Pacific Sonargaon</h4>
                    <p>107 Kazi Nazrul Islam Ave, Dhaka 1215</p>
                </div>
                <div className="venue-card">
                    <img src={intercontinental} alt="" />
                    <h4>Hotel Intercontinental</h4>
                    <p> G, 1 Minto Rd, Dhaka 1000</p>
                </div>
                <div className="venue-card">
                    <img src={radisson} alt="" />
                    <h4>Radisson Hotels</h4>
                    <p>Airport Rd, Dhaka 1206</p>
                </div>
                <div className="venue-card">
                    <img src={westine} alt="" />
                    <h4>The Westin Dhaka</h4>
                    <p>Main Gulshan Avenue, Plot-01 Rd 45, Dhaka 1212</p>
                </div>
                <div className="venue-card">
                    <img src={grandSultan} alt="" />
                    <h4>Grand Sultan Tea Resort & Golf</h4>
                    <p>Apt: D2, House108, Road 8, Block C, Dhaka 1213</p>
                </div>
                <div className="venue-card">
                    <img src={momoIn} alt="" />
                    <h4>Momo Inn Park & Resort</h4>
                    <p>Rangpur Road, Bogura 5800</p>
                </div>
                <div className="venue-card">
                    <img src={laMaridian} alt="" />
                    <h4>Le Méridien Hotels & Resorts</h4>
                    <p>79/A Commercial Area Airport Rd, Dhaka 1229</p>
                </div>
                <div className="venue-card">
                    <img src={regency} alt="" />
                    <h4>Dhaka Regency Hotel & Resort</h4>
                    <p>Airport Road | Nikunja 2 Dhaka 1229 | Bangladesh</p>
                </div>
            </div>
        </div>
    );
};

export default Venues;