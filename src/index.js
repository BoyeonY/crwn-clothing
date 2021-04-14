import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//BrowerRouter is a component that we are actually going to wrap around our application 
import { BrowserRouter } from 'react-router-dom';

//Provider: a component that we get from reactive redux.wrap around the entire app 
//because we want everything inside to have access to this store object that we get from redux.
import {Provider} from 'react-redux';
import store from './redux/store';


ReactDOM.render(
// what BrowerRouter component does is it gives our application that's sitting
// between this component all of the functionality of routing that this library provides

// Provider: parent of everthing inside of our application
  <Provider store ={store}>
    <BrowserRouter>
       <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);


