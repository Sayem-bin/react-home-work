import React from 'react';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
    return (
        <div className="Header">
            <img src={logo} alt=""/>
            <nav>
            <a href=""> User Name</a>
            <a href="">Friends Salary</a>
            </nav>
        
        </div>
    );
};

export default Header;