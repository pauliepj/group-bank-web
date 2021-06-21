import React from "react";
import { Link, withRouter } from 'react-router-dom'


function Header (){
    
        return(
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand">Ultra Group Bank</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"       aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
        <Link to="/" class="nav-item nav-link active" >Home <span class="sr-only">(current)</span></Link>
        <Link to="/accounts" class="nav-item nav-link" >Accounts</Link>
        <Link to="/profile" class="nav-item nav-link" >Edit Profile</Link>
        <Link to="/login" class="nav-item nav-link" >Log in</Link>
    </div>
  </div>
</nav>
    );
}

export default Header;