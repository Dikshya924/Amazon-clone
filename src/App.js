import React,{useEffect} from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Checkout from './components/Checkout'
import LoginPage from './components/LoginPage'
import Payment from './components/Payment'
import {auth} from './firebase'
import { useStateValue } from './StateProvider';
import {loadStripe} from "@stripe/stripe-js"
import {Elements} from "@stripe/react-stripe-js"

const promise= loadStripe('pk_test_51J686JHUFbxfZ7U5SuTSwkX1REM1Yj7i4WwmilAZ0ErxKD0FaDahyxNPR2tOprycMeDvOZY2blaAd56WgdCb6pue003n4xNrcl');
function App() {
  const [{user},dispatch]=useStateValue();
  useEffect(()=>{
    //will only once when the app component loads..
    auth.onAuthStateChanged(authUser=>{
    // console.log(' the user is',authUser);
    if(authUser){
      //user is logged in
      dispatch({
        type:'SET_USER',
        user:authUser
      })
    }
     
    
    else{
      //user is logged out
      dispatch({
        type: 'SET_USER',
        user: null
      })
    }
  })
  },[])
  return (
    <Router>
      <div className="App">

        <Switch>
          <Route path="/login" exact>
            <LoginPage />
          </Route>
          <Route path="/" exact>
            <Header />
            <Home />
          </Route>
          <Route path="/payment" exact>
            <Header />
            <Elements stripe={promise}>
            <Payment />
            </Elements>
       
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
        </Switch>

      </div>

    </Router>
  );
}

export default App;
