import React from 'react';
import './Review.css';

const ReviewDetails = ({event}) => {
    return (
        <div className="col-md-4 testimonial-wrapper">
			<div className="testimonial">
				<p className="quote"> "{event.description}"</p>
				<p className="attribution">- {event.name}({event.designation})</p>
			</div>
		</div>
    );
};

export default ReviewDetails;