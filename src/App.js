import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.components';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component.js';
import signInSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component.js';
import { auth, createUserProfileDocument } from '../src/firebase/firebase.utils';
import {connect} from 'react-redux';
import {setCurrentUser} from './redux/user/user.action';

class App extends React.Component {

      // handle the applcation being aware of any auth changes on firebase.
    unsubscriberFromAuth = null

    componentDidMount(){

      const {setCurrentUser} = this.props;

      this.unsubscriberFromAuth = auth.onAuthStateChanged(async  userAuth => {
        if(userAuth){
          const userRef = await createUserProfileDocument(userAuth);

          userRef.onSnapshot(snapshot => {
            setCurrentUser({
                id: snapshot.id,
                ...snapshot.data()
            })
          })
        }
        setCurrentUser(userAuth);
      })
    }


    componentWillUnmount(){
      this.unsubscriberFromAuth();
    }

  render() {
    return (
      <div>
        <Header/>
        <Switch>
        <Route exact path ='/' component ={HomePage}/>
        <Route path ='/shop' component ={ShopPage}/>
        <Route path ='/signin' component ={signInSignUpPage}/>
       
        </Switch>
      </div>
    );
  }
}

const mapDispathToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(null, mapDispathToProps )(App);
