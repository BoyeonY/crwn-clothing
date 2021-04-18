import React from 'react';
import './App.css';
import { Switch, Route, Redirect} from 'react-router-dom';
import {selectCurrentUser} from './redux/user/user.selectors';
import HomePage from './pages/homepage/homepage.components';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component.js';
import SignInSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component.js';
import CheckoutPage from './pages/checkout/checkout.component';
import { auth, createUserProfileDocument } from '../src/firebase/firebase.utils';
import {connect} from 'react-redux';
import {setCurrentUser} from './redux/user/user.action';
import {createStructuredSelector} from 'reselect';


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
            <Route exact path ='/checkout' component ={CheckoutPage}/>
            <Route exact path = '/signin' render = {() => this.props.currentUser ? (<Redirect to = '/' />) : (<SignInSignUpPage/>)}/>
          </Switch>
        </div>
      );
    }
  }


const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})



const mapDispathToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispathToProps )(App);
