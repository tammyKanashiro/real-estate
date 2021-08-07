import React from 'react'
import './Hero.scss'

const Hero = ({bgImg, body}) => {
    console.log('body', body)
    return (  
        <div className="hero" style={{backgroundImage: `url(${bgImg})`}}>
            <div className="hero-body">
                {body}
            </div>
        </div>

    );
}
 
export default Hero;