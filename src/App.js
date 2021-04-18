import React, { createContext, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import Dashboard from './Components/Dashboard/Dashboard';
import Login from './Components/Login/Login';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import User from './Components/Dashboard/User/User/User';
import Order from './Components/Dashboard/User/Order/Order';

export const UserContext = createContext()
function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
          <Router>
            <Switch>
              <Route path='/home'>
                <Home></Home>
              </Route>
              <Route path='/login'>
                <Login></Login>
              </Route>
              <PrivateRoute path='/dashboard'>
                <Dashboard></Dashboard>
              </PrivateRoute>
              <PrivateRoute path='/order/:_id'>
                <User></User>
              </PrivateRoute>
              <Route path='/'>
                <Home></Home>
              </Route>
            </Switch>
          </Router>
          </UserContext.Provider>
  );
}

export default App;
