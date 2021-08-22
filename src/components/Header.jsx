import React from 'react'
import logo from '../assets/images/logo.png'
import '../App.scss';

const Header = () => {
    return <header className="header">
        <nav>
            <div className="logo">
                <img src={logo} alt="logo"/>
                <span>TO do LIST</span>
            </div>
        </nav>
        </header>
    
};

export default Header;
