import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../../App';


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
               {
                        events.map(event => <tr>
                            <td>{event.name}</td>
                            <td>${event.price}</td>
                            </tr>)
                    }  
        </div>
    );
};

export default UserOrderList;