import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import AddService from "../AddService/AddService";
import Manage from '../Manage/Manage';
import OrderList from '../OrderList/OrderList';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
const Admin = () => {
    const [manage, setManage] = useState(false);
    const [orderList, setOrderList] = useState(false);
    const [makeAdmin, setMakeAdmin] = useState(false);
    const [addService, setAddService] = useState(true);
    const handleOrderList = () =>{
        setAddService(false)
        setManage(false)
        setOrderList(true)
        setMakeAdmin(false)
    }
    
   
    const handleAddService = () =>{
        setAddService(true)
        setManage(false)
        setOrderList(false)
        setMakeAdmin(false)
    }
    const handleMakeAdmin = () =>{
        setAddService(false)
        setManage(false)
        setOrderList(false)
        setMakeAdmin(true)
    }
    const handleManage = () =>{
        setManage(true)
        setMakeAdmin(false)
        setOrderList(false)
        setAddService(false)
    }
   
    return (
        <div className="container">
        <div className="row container">
            <div className="col-md-3 ">
            <Button className="mt-4" onClick={() =>handleOrderList(orderList)} variant="contained" color="primary">
                Order List
            </Button>
            <br/>
            <Button className="mt-4" onClick={() =>handleAddService(addService)} variant="contained" color="primary">
                Add Service
            </Button>
            <br/>
            <Button className="mt-4" onClick={() =>handleMakeAdmin(makeAdmin)} variant="contained" color="primary">
                Make Admin
            </Button>
            <br/>
            <Button className="mt-4" onClick={() =>handleManage(manage)} variant="contained" color="primary">
                Manage Service
            </Button>
            </div>
            <div className="col-md-9">
                {orderList && <OrderList></OrderList>}
                {addService && <AddService></AddService>}
                {makeAdmin && <MakeAdmin></MakeAdmin>}
                {manage && <Manage></Manage>}
            </div>
        </div>
    </div>
    );
};

export default Admin;