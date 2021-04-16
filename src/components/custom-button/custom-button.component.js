import React from 'react';

import './custom-button.styles.scss';


//reusable component for button

const CustomButton = ({children, isGoogleSignIn,inverted, ...otherProps}) => (
    <button className = {`${inverted ? 'inverted':''} ${isGoogleSignIn ? 'google-sign-in': ''} custom-button`}
    {...otherProps}>
        {children}
    </button>
)
export default CustomButton;