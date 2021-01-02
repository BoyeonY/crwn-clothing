import React from 'react';
import './menu-item.styles.scss';

//withRouter is a higer order component.
//a higer order component is essentially a function
// that takes a component as an argument
// which turns you a modified component.
import {withRouter} from 'react-router-dom';

//create a functional component ; we don't need to hold any state yet
// we want to be able to dynamically generate title by passing a title into our menu component.
// 1. De structure value of title
const MenuItem = ({title, imageUrl,size, history, linkUrl,match}) => (
    <div className={`${size} menu-item`} onClick={() =>history.push(`${match.url}${linkUrl}`)}>
        <div 
            className='background-image' 
            style ={{
                backgroundImage:`url(${imageUrl})`
            }}
        />
        <div className='content'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <span className='subtitle'>SHOP NOW</span>
        </div>
    </div>
);

//return us back 
export default withRouter(MenuItem);