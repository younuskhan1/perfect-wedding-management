import PropTypes from 'prop-types'; // ES6
import "./Card.css";
import { Link } from 'react-router-dom';

const Card = ({service}) => {
   const {id, name, image_url, price, short_description} = service;
    return (
        <div className='service-card-container'>
           <div className='service-card-image'>
             <img src={image_url} alt=""/>
           </div>
           <div className='service-card-text'>
             <div className='name-price-container'>
                <p>Service Name: {name}</p>
                <p>Service Price: {price}</p>
             </div>
             {
             short_description.length > 300 ? <p className='card-short-description'>{short_description.slice(0,400) + "..."} <Link to = {`/service/${id}`}>Read More</Link></p> : <p>{short_description}</p>
             }
           </div>
        </div>
    );
};

Card.propTypes ={
    service:PropTypes.object.isRequired,
}

export default Card;