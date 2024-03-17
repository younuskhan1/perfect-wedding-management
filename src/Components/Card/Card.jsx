import PropTypes from 'prop-types'; // ES6
import "./Card.css";
import Rating from 'react-rating';


const Card = ({service}) => {
   const {rating, name, image_url, price, short_description} = service;
    return (
        <div className='service-card-container'>
           <div className='service-card-image'>
             <img src={image_url} alt=""/>
           </div>
           <div className='service-card-text'>
             <div className='name-price-container'>
                <p>Name : {name}</p>
                <p>Price : {price}</p>
             </div>
              <div>
               {
                 short_description.length > 450 ? <p className='card-short-description'>{short_description.slice(0,450) + "..."}</p> : <p>{short_description}</p>
               }
              </div>
              <div className='rating-button-container'>
                <p><span className='rating-heading'>Ratings :</span> <Rating className='rating-stars' initialRating={rating} emptySymbol="fa fa-star-o fa-2x" fullSymbol="fa fa-star fa-2x" readonly/></p>
                <button className='view-details-button'>View Details</button>
              </div>
           </div>
        </div>
    );
};

Card.propTypes ={
    service:PropTypes.object.isRequired,
}

export default Card;