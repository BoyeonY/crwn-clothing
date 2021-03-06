import React from 'react';
import './header.styles.scss';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import {auth} from '../../firebase/firebase.utils';

const Header = ({currentUser}) => (

    <div className='header'>
        <Link className = 'logo-container' to ='/'> 
            <Logo className = 'logo'/>
        </Link>
        <div className = 'options'>
            <Link className='option' to ='/shop'> SHOP </Link>
            <Link className='option' to ='/contact'> CONTACT </Link>
            {
                currentUser ?
                <div class = 'option' onClick={()=>auth.signOut()}> SING OUT</div>
                :
                <Link classNmae='option' to='/Signin'>SIGN IN</Link>
            }
        </div>
    </div>
)

export default Header;