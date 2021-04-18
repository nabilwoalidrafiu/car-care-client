import React, { useContext, useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router';
import { UserContext } from '../../../../App';
import ProcessPayment from '../ProcessPayment/ProcessPayment';

const Order = () => {
    const {_id } = useParams();
    const history = useHistory()
    const [checkout, setCheckout] = useState({})
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const date = new Date()
    useEffect(()=>{
        fetch(`https://agile-anchorage-30388.herokuapp.com/service/${_id}`)
        .then(res => res.json())
        .then(data => {
            setCheckout(data)
        console.log('data of order',data)
        })
    },[])
 const handlePaymentSuccess = paymentId => {
        // history.push('/order')
        const checkOut = {paymentId, pdId:checkout._id, name:checkout.name, price:checkout.price, imageURL:checkout.imageURL, ...loggedInUser, date}
        fetch('https://agile-anchorage-30388.herokuapp.com/checkout', {
            method:"POST",
            headers:{'Content-Type': 'application/json'},
            body: JSON.stringify(checkOut)
        })
        .then(res => res.json())
        .then(data => console.log(data))
    }
    return (
        <div className="container">
            <h3 className='text-center'>Your are Ordering </h3>
        
       
          <div className="service-box">
                <h4>Service: {checkout.name}</h4>
                <h4>Price: {checkout.price}</h4>
                <h5>Name: {loggedInUser.displayName}</h5>
                <h5>Email: {loggedInUser.email}</h5>
                <ProcessPayment handlePayment={handlePaymentSuccess}></ProcessPayment>
              
            </div>
        </div>
    );
};

export default Order;