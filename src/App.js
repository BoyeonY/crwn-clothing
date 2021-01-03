import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.components';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component.js';

// const HatsPage = () => (
//   <div>
//     <h1>HATS PAGE</h1>
//   </div>
// )


    // thje Switch component does the moment that 
      //a route inside of it finds a match in the path.
      //it does not render anything else but that route.
      // it does match in order ; switch will match slash first and then
      // it will not render anything else after it.
function App() {
  return (
    <div>
      <Header />
      <Switch>
      <Route exact path ='/' component ={HomePage}/>
      <Route path ='/shop' component ={ShopPage}/>
     
      </Switch>
    </div>
  );
}

export default App;
