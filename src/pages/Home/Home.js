import React from 'react'
import { Container, Hero } from '../../components/common'
import './Home.scss'
import banner from '../../assets/images/house1.jpg'

const Home = () => {
    const heroBody = <><h1>Hero Test</h1><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates ea repellat ipsa necessitatibus autem, consequuntur reiciendis</p></>;
    return (  
        
        <div className="home">
            <Hero bgImg={banner} body={heroBody} />
            {/* <Hero bgImg={banner} title='Home page' /> */}

            <Container>
                <h1>Home Page</h1>
            </Container>
        </div>
    );
}
 
export default Home;