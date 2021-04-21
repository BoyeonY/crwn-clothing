import React from 'react';
import MenuItem from '../menu-item/menu-item.components';
import {connect} from 'react-redux';
import './directory.styles.scss';
import {selectDirectorySections} from '../../redux/directory/directory.selector';
import {createStructuredSelector} from 'reselect';

// this component is going to have a directory with a state value of those menu items
//super(); -> pulling out all the things we need from react.component into our class.
//this.state ={} -> set a state value to poplulate menu items
// sections -> each of five menu items  
// create array values in sections

const Directory =({sections}) =>{
  console.log('section',{sections}); 
  return(
  <div className='directory-menu'>
      {sections.map(({id, ...otherSectionProps}) => (
        <MenuItem key={id} {...otherSectionProps}/>
      ))} 
  </div>)
  }


const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
})
export default connect(mapStateToProps)(Directory);