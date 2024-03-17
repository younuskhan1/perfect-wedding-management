import { useEffect, useState } from "react";
import Card from "../Card/Card";
import "./Cards.css";

const Cards = () => {
 const [services, setServices] = useState([]);
//  console.log(data);

 useEffect(()=>{
    const fetchData = async()=>{
        try{
            const URL = `services.json`;
            const res = await fetch(URL);
            const services = await res.json();
            setServices(services);
        }catch(error){
              console.log(error);
        }
    };
    fetchData();
 },[])

    return (
        <div className="service-card-main-container">
            <h1>Our Supporting Services</h1>
            <ul>
                {services.map((service,index) =><Card key={index} service={service}></Card>)}
            </ul>
        </div>
    );
};

export default Cards;