import React, { useEffect, useState } from 'react';
import './Service.css';
import ServiceDetails from './ServiceDetails';
const Service = () => {
   const [service, setService] = useState([]); 
   useEffect(()=>{
       fetch('https://agile-anchorage-30388.herokuapp.com/service')
   .then(res=> res.json())
   .then(data => {
      setService(data) 
   })
   },[])
    return (
        <section className="services">
        <div className="container">
           <div className="section-title">
              <h2 >Our Services</h2>
              <p className="col-md-8 offset-md-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type</p>
           </div>
          
           <div className="row text-center container m-auto">
                  {
                        service.map(event => <ServiceDetails className="row" key={event._id} event={event}></ServiceDetails>)
                    }
              
           </div>
        </div>
     </section>
    );
};

export default Service;