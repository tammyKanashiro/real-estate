import React from 'react';

import './_Container.scss';

const Container = ({children}) => {
    return ( 
        <section className="container">
            {children}
        </section>
    );
}
 
export default Container;