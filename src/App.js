import './App.css';
import LoginPage from './login-page/LoginPage';
import HomePage from './home-page/HomePage';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer';
import Profile from './components/Profile';
import React from 'react';
import Account from './components/Account';
import { useEffect, useState } from "react";
import { Canvas } from '@react-three/fiber'
import { Html, Box } from '@react-three/drei'
import SignInPage from './components/SignInPage';
import NewAccount from './components/NewAccount';


function App(){
  
    const [users, setUsers] = useState([]);
    const [accounts, setAccounts] = useState([]);
    const [currentUser, setCurrentUser] = useState({})
    
    
    const fetchAccount = async () => {
      try{
        fetch('http://localhost:6060/allaccounts', {
            "method": "GET",
            "headers": {
                "Content-Type": "application/json"
            },
        })
            .then(res => res.json())
            .then(data => {
                setAccounts(data);
            })
    } catch (err) {
        console.error(err);
    }
    }

    const fetchProfile = async () => {
      try{
        fetch('http://localhost:7060/allcustomers', {
            "method": "GET",
            "headers": {
                "Content-Type": "application/json"
            },
        })
            .then(res => res.json())
            .then(data => {
                setUsers(data);
            })
    } catch (err) {
        console.error(err);
    }
    }
    
      useEffect(() =>{
        fetchProfile();
        fetchAccount();
      },[])
    


  return (        
      <BrowserRouter>
      <Header currentUser = {currentUser}/>
      <Switch>
      <Route exact path="/"><HomePage /></Route>
      <Route exact path="/login"><SignInPage setUsers = {setUsers} users = {users} setCurrentUser= {setCurrentUser}/></Route>
      <Route exact path="/accounts" ><Account setAccounts= {setAccounts} currentUser = {currentUser} accounts = {accounts} /></Route>
      <Route exact path="/profile" ><Profile currentUser = {currentUser}/></Route>
      <Route exact path="/newaccount"><NewAccount  accounts = {accounts}  setAccounts = {setAccounts} currentUser= {currentUser}/></Route>
      </Switch>
      
      <Footer/>
      </BrowserRouter>
  )
}

export default App;
