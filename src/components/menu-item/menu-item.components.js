import React from 'react';
import './menu-item.styles.scss';
//create a functional component ; we don't need to hold any state yet
// we want to be able to dynamically generate title by passing a title into our menu component.
// 1. De structure value of title
const MenuItem = ({title, imageUrl,size}) => (
    <div className={`${size} menu-item`}>
        <div 
            className='background-image' 
            style ={{
                backgroundImage:`url(${imageUrl})`
            }}
        />
        <div className='content'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <span classname='subtitle'>SHOP NOW</span>
        </div>
    </div>
);

export default MenuItem;