import React from 'react';
import logo from '../../../assets/images/logo_realestate.jpg';
import { Container } from '../../common';
import { Link } from 'react-router-dom'
import './_Header.scss'
import { useState } from 'react';

 const Header = () => {
    // Mobile navBar
    const [menuClicked, setMenuClicked] = useState(false);

    const menuOnClick = () => {
        setMenuClicked(!menuClicked)
    }

    return ( 
        <div className='header'>
            <Container>
                <img className="header-logo" src={logo} alt="Logo" />
                <div className={"navbar " + (menuClicked ? 'active' : '')}>
                    <div className='navbar--links'>
                        <Link className='navbar-item' to='/'>Home</Link>
                        <Link className='navbar-item' to='/rent'>Rent</Link>
                        <Link className='navbar-item' to='/buy'>Buy</Link>
                        <Link className='navbar-item' to='/contact-us'>Contact Us</Link>
                    </div>

                    <div className="navbar--icons">
                        <div className="signin">
                            <i className="far fa-user-circle"></i>
                        </div>
                        <div className="login">
                            <i className="fas fa-sign-in-alt"></i>
                        </div>
                    </div>
                </div>

                <div className="menu-icon" onClick={menuOnClick}>
                    <i className={menuClicked ? 'fas fa-times' : ' fas fa-bars'}></i>
                </div>
            </Container>
        </div>
    );
 }
  
 export default Header;