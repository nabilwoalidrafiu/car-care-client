import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../../App';
import { Button, Table } from 'react-bootstrap';

const UserOrderList = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [events, setEvents] = useState([]); 
    useEffect(()=>{
        fetch('https://agile-anchorage-30388.herokuapp.com/checkout?email=' + loggedInUser.email)
        .then(res => res.json())
        .then(data => {setEvents(data)})
    },[events])
    return (
        <div>
                    <div className="text-center container">
        <h3 className="text-center">Your Order Lists</h3>
        <Table striped bordered hover variant="dark">
        <thead>
            <tr>
            <th>Service</th>
            <th>Price</th>
            <th>Status</th>
            </tr>
        </thead>
        <tbody>
              
            {
                    events.map(event => <tr>
                        <td>{event.name}</td>
                        <td>$ {event.price}</td>
                        <td>Pending</td>
                        </tr>)
                } 
           
            
        </tbody>
        
    </Table>
                
    </div>
        </div>
    );
};

export default UserOrderList;