import React, { useState } from 'react';
import { useForm } from "react-hook-form";

const MakeAdmin = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        const eventData = {
            email: data.email
          }
          console.log(data)
          const url = `https://agile-anchorage-30388.herokuapp.com/addAdmin`
        fetch(url, {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(eventData)
        })
        .then( res => console.log('server side response', res))
    };

    return (
        <div className="text-center ship-form">
        <h3 className="text-center">Give Feedback</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="col-md-6 wow slideInLeft d-flex justify-content-around" data-wow-duration="2s" data-wow-offset="350">  
                            <div className="form-group">
                                <input type="email" className="form-control input-lg p-3 ms-3" placeholder="Admin Email" {...register("email")}/>
                            </div>
                                
                                <div><button type="submit" className="btn btn-success btn-sm">Add Admin</button></div>
                            
                        </div>
            </form>
        </div>
    );
};

export default MakeAdmin;