import './App.css';
import React from 'react'
import  { BrowserRouter, Route,Routes } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import CreateAccount from './components/CreateAccount';
import Withdraw from './components/Withdraw';
import Deposit from './components/Deposit';
import FundTransfer from './components/FundTransfer';
import Balance from './components/Balance';
import PinChange from './components/Pinchange';
import AccountSummary from './components/AccountSummary';
import Nav from './components/Nav';


function App() {
  return (
    <div >
<BrowserRouter>
<Nav/>
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/About'element={<About/>}/>
  <Route path='/Contact'element={<Contact/>}/>
  <Route path='/CreateAccount'element={<CreateAccount/>}/>
  <Route path='/Withdraw'element={<Withdraw/>}/>
  <Route path='/Deposit'element={<Deposit/>}/>
  <Route path='/FundTransfer'element={<FundTransfer/>}/>
  <Route path='/Balance'element={<Balance/>}/>
  <Route path='/Pinchange'element={<PinChange/>}/>
  <Route path='/AccountSummary'element={<AccountSummary/>}/>
</Routes>
</BrowserRouter>
      </div>
  );
}

export default App;
