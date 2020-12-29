import React from 'react';
import './homepage.styles.scss';

import Directory from '../../components/directory/directory.component';

//create constructor
// two components (outside and inside)
/* span tag is an inline container used to mark up a part of a text 
    or a part of a document.*/
const HomePage = () => (
    <div className='homepage'>
        <Directory />
    </div>
);

export default HomePage;