import './App.css';
import LoginPage from './login-page/LoginPage';
import HomePage from './home-page/HomePage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer';
import React from 'react';



class App extends React.Component{
  render(){
  return (
    <div className="App">
      
      <Router>
        
      <Header/>
      <Switch>
      <Route exact path="/" component={HomePage}/>
      <Route exact path="/login" component={LoginPage}/>
      </Switch>
      <Footer/>
      </Router>
      
    </div>
  );
  }
}

export default App;
