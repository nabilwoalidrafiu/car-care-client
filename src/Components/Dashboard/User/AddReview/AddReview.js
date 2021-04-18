import React, { useState } from 'react';
import { useForm } from "react-hook-form";

const AddReview = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        const eventData = {
            name: data.name,
            designation: data.designation,
            description: data.description
          }
          console.log(data)
          console.log(eventData)
          const url = `https://agile-anchorage-30388.herokuapp.com/addReview`
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
        <div>
                <div className="text-center ship-form">
            <h3 className="text-center">Give Feedback</h3>
            

        
        <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="col-md-6 wow slideInLeft" data-wow-duration="2s" data-wow-offset="350">  
                            <div className="form-group">
                                <input type="text" className="form-control input-lg" placeholder="Your Name" {...register("name")}/>
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control input-lg" placeholder="Company's Name Designation" {...register("designation")}/>
                            </div>
                        </div>
                        <div className="col-md-6 wow slideInRight" data-wow-duration="2s" data-wow-offset="350">
                            <div className="form-group">
                                <textarea className="form-control input-lg" placeholder="Description" {...register("description")}></textarea>
                            </div>
                            <button type="submit" className="btn btn-success btn-lg btn-block">Submit</button>
                        </div>
                    </form>
                    </div>
        </div>
    );
};

export default AddReview;