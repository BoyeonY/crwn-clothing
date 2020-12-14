import React from 'react';
import './homepage.styles.scss';

//create constructor
// two components (outside and inside)
/* span tag is an inline container used to mark up a part of a text 
    or a part of a document.*/
const HomePage = () => (
    <div className='homepage'>
        <div className='directory-menu'>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>HATS</h1>
                    <span classname='subtitle'>SHOP NOW</span>
                </div>
            </div>
        </div>
        <div className='directory-menu'>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>JACKETS</h1>
                    <span classname='subtitle'>SHOP NOW</span>
                </div>
            </div>
        </div>
        <div className='directory-menu'>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>SNEAKERS</h1>
                    <span classname='subtitle'>SHOP NOW</span>
                </div>
            </div>
        </div>
        <div className='directory-menu'>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>WOMENS</h1>
                    <span classname='subtitle'>SHOP NOW</span>
                </div>
            </div>
        </div>
        <div className='directory-menu'>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>MENS</h1>
                    <span classname='subtitle'>SHOP NOW</span>
                </div>
            </div>
        </div>
        <div className='directory-menu'>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>HATS</h1>
                    <span classname='subtitle'>SHOP NOW</span>
                </div>
            </div>
        </div>

    </div>
);

export default HomePage;