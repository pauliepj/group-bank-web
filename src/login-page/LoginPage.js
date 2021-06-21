import React from "react";
import { useState } from "react";
import { useHistory } from 'react-router-dom';


function LoginPage(props){
    const [userName, setUsername] = useState(0);
    const [pass, setPass] = useState(0);
    const history = useHistory();


    const handleUserNameChange = (e) => {
        setUsername(e.target.value);
    
    }

    const handlePassChange = (e) => {
        setPass(e.target.value);
    }
    const handleSubmitSignIn = (e) => {
        e.preventDefault();
        const matches = props.users.filter(user=>user.userName===userName);

        matches.forEach(match => {
            if (match.password === pass){
                props.setCurrentUser(match);
                history.push("/");
            }
        })
    }
        return (
            <div>
      <div id="login">
        <h3 class="text-center text-white pt-5">Login form</h3>
        <div class="container">
            <div id="login-row" class="row justify-content-center align-items-center">
                <div id="login-column" class="col-md-6">
                    <div id="login-box" class="col-md-12">
                        <form id="login-form" class="form" onSubmit = {handleSubmitSignIn}>
                            <h3 class="text-center text-info">Login</h3>
                            <div class="form-group">
                                <label for="username" class="text-info">Username:</label><br></br>
                                <input type="text" name="username" id="username" class="form-control" onChange = {handleUserNameChange}></input>
                            </div>
                            <div class="form-group">
                                <label for="password" class="text-info">Password:</label><br></br>
                                <input type="text" name="password" id="password" class="form-control" onChange = {handlePassChange}></input>
                            </div>
                            <div class="form-group">
                                <label for="remember-me" class="text-info"><span>Remember me</span> <span><input id="remember-me" name="remember-me" type="checkbox"></input></span></label><br></br>
                                <input type="submit" name="submit" class="btn btn-info btn-md" value="submit"></input>
                            </div>
                            <div id="register-link" class="text-right">
                            <a href="#" class="text-info">Register here</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    );   
}

export default LoginPage;