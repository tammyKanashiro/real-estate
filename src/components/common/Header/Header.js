 import React from 'react';
 import { Container } from '../../common';
 import { Link } from 'react-router-dom'
 import './_Header.scss'
import { useState } from 'react';

 const Header = () => {
    const [menuClicked, setMenuClicked] = useState(false);

    const menuOnClick = () => {
        console.log(menuClicked)
        setMenuClicked(!menuClicked)
    }

    return ( 
        <Container>
            <div className='header'>
                <h1 className="header-logo">LOGO <i className="fas fa-pray"></i></h1>
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
                    </div>
                </div>

                <div className="menu-icon" onClick={menuOnClick}>
                    <i className={menuClicked ? 'fas fa-times' : ' fas fa-bars'}></i>
                </div>
            </div>
        </Container>
    );
 }
  
 export default Header;