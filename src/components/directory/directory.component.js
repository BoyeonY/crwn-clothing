import React from 'react';
import MenuItem from '../menu-item/menu-item.components';
import './directory.styles.scss';

// this component is going to have a directory with a state value of those menu items
//super(); -> pulling out all the things we need from react.component into our class.
//this.state ={} -> set a state value to poplulate menu items
// sections -> each of five menu items  
// create array values in sections

class Directory extends React.Component {
    constructor() {
        super();
        this. state = {
            sections:
            [
                {
                  title: 'hats',
                  imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                  id: 1,
                  linkUrl: 'hats'
                },
                {
                  title: 'jackets',
                  imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                  id: 2,
                  linkUrl: ''
                },
                {
                  title: 'sneakers',
                  imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                  id: 3,
                  linkUrl: ''
                },
                {
                  title: 'womens',
                  imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                  size: 'large',
                  id: 4,
                  linkUrl: ''
                },
                {
                  title: 'mens',
                  imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                  size: 'large',
                  id: 5,
                  linkUrl: ''
                }
              ]
        }
    }

    render(){
        return(
            <div className='directory-menu'>
                {/* {this.state.sections.map(({title,imageUrl,id, size, linkUrl}) => (
                    <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} linkUrl={linkUrl}/>
                ))} */
                   this.state.sections.map(({id, ...otherSectionProps}) => (
                    <MenuItem key={id} {...otherSectionProps}/>
                ))} 
        
                
            </div>
        );
    }
}

export default Directory;