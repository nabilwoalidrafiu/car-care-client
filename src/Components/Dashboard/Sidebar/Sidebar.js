import React, { useContext,useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import './Sidebar.css';
import { useHistory, useParams } from 'react-router';
// const { BrowserRouter, Route, Link } = ReactRouterDOM;
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Order from '../User/Order/Order';
import UserOrderList from '../User/UserOrderList/UserOrderList';
import AddReview from '../User/AddReview/AddReview';
import AddService from '../Admin/AddService/AddService';
import Manage from '../Admin/Manage/Manage';
import OrderList from '../Admin/OrderList/OrderList';
import MakeAdmin from '../Admin/MakeAdmin/MakeAdmin';
// Each logical "route" has two components, one for
// the sidebar and one for the main area. We want to
// render both of them in different places when the
// path matches the current URL.
const routes = [
//   {
//     path: "/",
//     exact: true,
//     sidebar: () => <div>Home sidebar content</div>,
//     main: () => <h2>Review</h2>
//   },
{
  path: "/adminOrderList",
  main: () => <OrderList></OrderList>
},
  {
    path: "/addService",
    main: () => <AddService></AddService>
  },
  {
    path: "/makeAdmin",
    main: () => <MakeAdmin></MakeAdmin>
  },
  {
    path: "/manage",
    main: () => <Manage></Manage>
  },

  // user
  {
    path: "/order/:_id",
    main: () => <Order></Order>
  },
  {
    path: "/userOrderList",
    main: () => <UserOrderList></UserOrderList>
  },
  {
    path: "/addReview",
    main: () => <AddReview></AddReview>
  }
];
const Sidebar = () => {

  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [isAdmin, setIsAdmin] = useState(false);
  useEffect(() => {
    fetch('https://agile-anchorage-30388.herokuapp.com/isAdmin', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ email: loggedInUser.email })
    })
        .then(res => res.json())
        .then(data => setIsAdmin(data));
}, [])

    const {_id } = useParams();
    return (
        <Router>
        <div className='row container ' style={{ height: "100vh" }}>
          <div className="col-md-3 sidebar" >
            <ul className="list-unstyled">
              {/* admin */}
           {isAdmin && 
           <div>
            <li>
                <Link to="/adminOrderList">Admin Order List</Link>
              </li>
              <li>
                <Link to="/addService">Add Service</Link>
              </li>
              <li>
                <Link to="/manage">Manage Services</Link>
              </li>
              <li>
                <Link to="/makeAdmin">Make Admin</Link>
              </li>
           </div>}

              {/* user */}
              
              <li>
                <Link to={`/order/${_id}`}>Order</Link>
              </li>
              <li>
                <Link to="/userOrderList">User Order List</Link>
              </li>
              <li>
                <Link to="/addReview">Add Review</Link>
              </li>
             
            </ul>
  
                      
            {routes.map((route, index) => (
              // You can render a <Route> in as many places
              // as you want in your app. It will render along
              // with any other <Route>s that also match the URL.
              // So, a sidebar or breadcrumbs or anything else
              // that requires you to render multiple things
              // in multiple places at the same URL is nothing
              // more than multiple <Route>s.
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                component={route.sidebar}
              />
            ))}
          </div>
  
          <div className="col-md-9"
        //    style={{ flex: 1, padding: "10px" }}
           >
            {routes.map((route, index) => (
              // Render more <Route>s with the same paths as
              // above, but different components this time.
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                component={route.main}
              />
            ))}
          </div>
        </div>
      </Router>
    
    );
};

export default Sidebar;