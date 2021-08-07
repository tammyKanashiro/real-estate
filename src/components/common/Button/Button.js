import React from 'react';
import PropTypes from 'prop-types';
import './_Button.scss';

const Button = ({primary, newClass, label, onClick, type, href}) => {
    const isPrimary = primary ? 'button--primary' : 'button--secondary'
    const classes = ['button'];

    classes.push(isPrimary);
    classes.push(newClass);

    const classesOutput = classes.join(' ')


    return ( 
        <>
            {(type === 'a') && (<a className={classesOutput} href={href}>{label}</a>)}
            
            {(type === 'button' && (<button className={classesOutput} {...onClick ? onClick={onClick} : ''}>{label}</button>))}
        </>
    );
}
 
Button.propTypes = {
/**
* Is this the principal call to action on the page?
*/
primary: PropTypes.bool,
/**
* Button label
*/
label: PropTypes.string,
/**
* Optional click handler
*/
onClick: PropTypes.func,
/**
* (String) Options are `a`, `button`. Defines the type of button.
*/
type: PropTypes.string,
/**
* (String) Link the button will navigate to
*/
href: PropTypes.string,
};

Button.defaultProps = {
    primary: true,
    label: 'Submit',
    type: 'button',
    onClick: undefined,
};

export default Button;