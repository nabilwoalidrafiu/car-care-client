
import React, { useEffect, useState } from 'react';
import {Table } from 'react-bootstrap';
import DeleteIcon from '@material-ui/icons/Delete';

const OrderList = () => {
        
    const [events, setEvents] = useState([]); 
    useEffect(()=>{
        fetch('https://agile-anchorage-30388.herokuapp.com/checkout')
    .then(res=> res.json())
    .then(data => {
        setEvents(data)
    })
    },[events])

    return (
        <div className="text-center container">
        <h3 className="text-center">Manage Services</h3>
        <Table striped bordered hover variant="dark">
        <thead>
            <tr>
            <th>Name</th>
            <th>Email Id</th>
            <th>Services</th>
            <th>Pay With</th>
            <th>Status</th>
            </tr>
        </thead>
        <tbody>
              
            {
                    events.map(event => <tr>
                        <td>{event.displayName}</td>
                        <td>{event.email}</td>
                        <td>{event.name}</td>
                        <td>{event.paymentId.card.brand} Card</td>
                        <td></td>
                        </tr>)
                } 
           
            
        </tbody>
        
    </Table>
                
    </div>
    );
};

export default OrderList;