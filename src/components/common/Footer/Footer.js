import React from 'react';
import logo from '../../../assets/images/logo_realestate.jpg';
import Container from '../Container/Container';
import './_Footer.scss'

const Footer = () => {
    return ( 
        <div className="footer">
            <Container>                
                <section className="footer-main">
                    <section className="footer-logo">
                        <img src={logo} alt="Logo" />
                    </section>

                    <section className="footer-content">                    
                        <div>
                            <h6>Company</h6>

                            <ul>
                                <li>Our Story</li>
                                <li>Blog</li>
                            </ul>
                        </div>

                        <div>
                            <h6>Services</h6>

                            <ul>
                                <li>Rent</li>
                                <li>Buy</li>
                            </ul>
                        </div>

                        <div>
                            <h6>Contact Us</h6>

                            <ul>
                                <li>Phone:</li>
                                <li>Email</li>
                            </ul>
                        </div>
                    </section>
                </section>

                <section className="footer-info">
                    <p>The images used in this site are not used for profit or business purposes. In the event that these images are copyighted and ownership can be evidenced, please contact Tammy Kanashiro (tammy.kanashiro@gmail.com) and the images will be immediately removed.</p>
                </section>
            </Container>
        </div>
    );
}
 
export default Footer;