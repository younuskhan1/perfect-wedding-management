import "./ErrorPage.css";
import errorPhoto from "../../assets/notFoundPage.jpg";
import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            <div className="error-photo-child">
                <img className="error-photo" src={errorPhoto} alt="not found photo"/>
                <Link to="/"><button className="go-home-button">Go Home</button></Link>
            </div>
        </div>
    );
};

export default ErrorPage;