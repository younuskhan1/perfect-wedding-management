import { useLoaderData, useParams } from "react-router-dom";
import "./ViewCardDetails.css";
import BottomSideAdd from "../BottomSideAdd/BottomSideAdd";

const ViewCardDetails = () => {
    const {id} = useParams();
    // console.log(id, typeof(id));
    const idInNumber = parseFloat(id);
    const servicesData = useLoaderData();
    // console.log(servicesData);
    const selectedItem = servicesData?.find((service)=> service.id === idInNumber);
    const {name, image_url, price, short_description} = selectedItem;
    return (
        <div className="selectedItem-container">
            <div className="selected-image-container">
                <img src={image_url} alt="" />
                <div className="price-name-container">
                    <p>{name}</p>
                    <p>Price : {price}</p>
                </div>
            </div>
            <p className="selected-short-description">{short_description}</p>
            <BottomSideAdd></BottomSideAdd> 
        </div>
    );
};

export default ViewCardDetails;