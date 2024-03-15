import "./Venues.css";
import sonargaon from "../../venues/sonargaon.jpg";
import intercontinental from "../../venues/intercontinental.jpg";
import radisson from "../../venues/radisson.jpg";
import westine from "../../venues/westine.jpg";
import grandSultan from "../../venues/grand-sultan.jpg";
import momoIn from "../../venues/momo-inn.jpg";
import laMaridian from "../../venues/laMeridian.jpg";
import regency from "../../venues/regency.jpg";

const Venues = () => {
    return (
        <div>
            <h1 className="venues-heading">Our Available Venues</h1>
            <div className="venue-container">
                <div className="venue-card">
                    <img src={sonargaon} alt="" />
                    <h4>Pan Pacific Sonargaon</h4>
                    <p>107 Kazi Nazrul Islam Ave, Dhaka 1215</p>
                </div>
                <div className="venue-card">
                    <img src={sonargaon} alt="" />
                    <h4>Pan Pacific Sonargaon</h4>
                    <p>107 Kazi Nazrul Islam Ave, Dhaka 1215</p>
                </div>
                <div className="venue-card">
                    <img src={sonargaon} alt="" />
                    <h4>Pan Pacific Sonargaon</h4>
                    <p>107 Kazi Nazrul Islam Ave, Dhaka 1215</p>
                </div>
                <div className="venue-card">
                    <img src={sonargaon} alt="" />
                    <h4>Pan Pacific Sonargaon</h4>
                    <p>107 Kazi Nazrul Islam Ave, Dhaka 1215</p>
                </div>
            </div>
        </div>
    );
};

export default Venues;