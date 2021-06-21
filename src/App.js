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
                console.log(data)
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
    <div>
      
      <BrowserRouter>
        
      <Header currentUser = {currentUser}/>
      <Switch>
      <Route exact path="/"><HomePage /></Route>
      <Route exact path="/login"><LoginPage users = {users} setCurrentUser= {setCurrentUser}/></Route>
      <Route exact path="/accounts" ><Account currentUser = {currentUser} accounts = {accounts} /></Route>
      <Route exact path="/profile" ><Profile currentUser = {currentUser}/></Route>
      </Switch>
      <Footer/>
      </BrowserRouter>
      
    </div>
  )
}

export default App;
