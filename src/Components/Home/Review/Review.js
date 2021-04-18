import React, { useEffect, useState } from 'react';
import './Review.css'
import ReviewDetails from './ReviewDetails';

const Review = () => {

    const [review, setReview] = useState([]); 
    useEffect(()=>{
        fetch('https://agile-anchorage-30388.herokuapp.com/review')
    .then(res=> res.json())
    .then(data => {
       setReview(data) 
    })
    },[])

    return (
        <div className="container">
            <div className="section-title text-center">
                <h2 className="text-center">Customers Review</h2>
                <p className="col-md-8 offset-md-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type</p>
            </div>
    <div className="row text-centered is-multiline">
                    {
                        review.map(event => <ReviewDetails className="row" key={event._id} event={event}></ReviewDetails>)
                    }
    </div>
                    
</div>
    );
};

export default Review;