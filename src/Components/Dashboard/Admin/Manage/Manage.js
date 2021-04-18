import React, { useEffect, useState } from 'react';
import {Table } from 'react-bootstrap';
import DeleteIcon from '@material-ui/icons/Delete';

const Manage = () => {
    
    const [events, setEvents] = useState([]); 
    useEffect(()=>{
        fetch('https://agile-anchorage-30388.herokuapp.com/service')
    .then(res=> res.json())
    .then(data => {
        setEvents(data)
    })
    },[events])
    
    const deleteCycle = (_id) =>{
        fetch(`https://agile-anchorage-30388.herokuapp.com/delete/${_id}`,{
            method:"DELETE",
        })
        .then(res => res.json())
        .then(result => {
            
        })
    }
    return (
        <div className="text-center container">
            <h3 className="text-center">Manage Services</h3>
            <Table striped bordered hover variant="dark">
            <thead>
                <tr>
                <th>Service Name</th>
                <th>Price</th>
                <th>Action</th>
                </tr>
            </thead>
            <tbody>
                  
                {
                        events.map(event => <tr>
                            <td>{event.name}</td>
                            <td>${event.price}</td>
                            <td><DeleteIcon onClick={() => deleteCycle(event._id)} aria-label="delete"  style={{cursor: "pointer"}}></DeleteIcon></td>
                            </tr>)
                    } 
               
                
            </tbody>
            
        </Table>
                    
        </div>
    );
};

export default Manage;