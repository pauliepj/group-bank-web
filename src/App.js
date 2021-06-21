import './App.css';
import LoginPage from './login-page/LoginPage';
import HomePage from './home-page/HomePage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer';
import Profile from './components/Profile';
import React from 'react';
import Account from './components/Account';



class App extends React.Component{
  render(){
  return (
    <div className="App">
      
      <Router>
        
      <Header/>
      <Switch>
      <Route exact path="/" component={HomePage}/>
      <Route exact path="/login" component={LoginPage}/>
      <Route exact path="/accounts" component={Account}/>
      <Route exact path="/profile" component={Profile}/>
      </Switch>
      <Footer/>
      </Router>
      
    </div>
  );
  }
}

export default App;
