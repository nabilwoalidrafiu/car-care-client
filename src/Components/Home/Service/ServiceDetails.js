import React from 'react';
import './Service.css';
import { useHistory } from 'react-router';

const ServiceDetails = ({event}) => {
    const {_id} = event;
    const history = useHistory();
    const handleClickExplore = (_id) =>{
        history.push(`/order/${_id}`)
    }
    return (
        <div className=" col-sm-12 col-md-4" data-aos="fade-up">
        <div className="service-box">
           <img src={event.imageURL} alt=""/>
           <h4><a href="">{event.name}</a></h4>
           <h4><a href="">${event.price}</a></h4>
           <p>{event.description}</p>
           <button 
           onClick={()=> handleClickExplore(_id)} 
           className="btn btn-success center-block mt-2 mb-2">Order Service »</button>
        </div>
       
     </div>
    );
};

export default ServiceDetails;