import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.components';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component.js';
import signInSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component.js';
import { auth } from '../src/firebase/firebase.utils';


class App extends React.Component {
  constructor(){
    super();

    this.state = {
      currentUser : null
    }
  }
      // open subscription? - it's an open messaging system between our application and our firebase 
      // at whenever any changes occur on firebase from any source related to this application. Firebase sends out that a message that says
      //that the off status chanage the user has updated whether they've signed in through some service such as our Google sign or 
      //our email and password sign up or they've signed out and then they will give us this user and it will call it.
      // we don't actually have to manually fetch every time we want to check if that status changed. this connection is always open as long as application component is mounted on our job 
      // but it's an open subscription we also have to close subscriptions when this on mounts because we don't want any memory leaks in our javascript application


      // handle the applcation being aware of any auth changes on firebase.
  unsubscriberFromAuth = null

    componentDidMount(){

    
      this.unsubscriberFromAuth = auth.onAuthStateChanged(user => {
        this.setState({currentUser:user});

        console.log(user);
      })
    }


    componentWillUnmount(){
      this.unsubscriberFromAuth();
    }

  render() {

    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
        <Route exact path ='/' component ={HomePage}/>
        <Route path ='/shop' component ={ShopPage}/>
        <Route path ='/signin' component ={signInSignUpPage}/>
       
        </Switch>
      </div>
    );
  }
}

export default App;
