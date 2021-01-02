import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//BrowerRouter is a component that we are actually going to wrap around our application 
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
// what BrowerRouter component does is it gives our application that's sitting
// between this component all of the functionality of routing that this library provides
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);


