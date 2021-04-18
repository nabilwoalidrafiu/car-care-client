import React from 'react';
import HeaderMain from '../HeaderMain/HeaderMain';
import MenuAppBar from '../MenuAppBar/MenuAppBar';
import './Header.css'
const Header = () => {
    return (
        <div className="header-container">
            <MenuAppBar></MenuAppBar>
            <HeaderMain></HeaderMain>
           
        </div>
    );
};

export default Header;