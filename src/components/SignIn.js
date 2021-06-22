import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import '../style/SignInStyle.css';

function SignIn(props) {

    const [userName, setUsername] = useState(0);
    const [pass, setPass] = useState(0);
    const [pass2, setPass2] = useState(0);
    const history = useHistory();
    const [customerName, setCustomerName] = useState(0);
    const [phone, setPhone] = useState(0);
    const [email, setEmail] = useState(0);
    const [city, setCity] = useState(0);
    
    const handleUserNameChange = (e) => {
        setUsername(e.target.value);
    }
    const handlePassChange = (e) => {
        setPass(e.target.value);
    }
    const handleRealNameChange = (e) => {
        setCustomerName(e.target.value);
    }
    const handlePhoneChange = (e) => {
        setPhone(e.target.value);
    }
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }
    const handleCityChange = (e) => {
        setCity(e.target.value);
    }
    const handlePassSignUpVerificationChange = (e) => {
        setPass2(e.target.value);
    }

    const handleSubmitSignIn = (e) => {
        e.preventDefault();
        const matches = props.user.filter(user=>user.userName===userName);
        matches.forEach(match => {
            if (match.password === pass){
                props.setCurrentUser(match);

                history.push("/");
            }
        })
    }

    const handleSubmitSignUp = async (e) => {
        e.preventDefault();
        if (pass === pass2) {

            try{
                fetch(`http://localhost:7060/customer`, {
                    "method": "POST",
                    "headers": {
                        "Content-Type": "application/json"
                    },
                    "body": JSON.stringify({
                        userName: userName,
                        password: pass,
                        customerName: customerName,
                        phone: phone,
                        email: email,
                        city: city
                    })
                })
                    .then(res => res.json())
                    .then(data => {
                        props.setUsers({...props.users, data});
                        props.setCurrentUser({ userName: userName, pass: pass, customerName: customerName, phone: phone, email: email, city: city });
                    })
                history.push("/");
            } catch (err) {
                console.error(err);
            }
        }
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 mx-auto p-0">
                    <div className="card">
                        <div className="login-box">
                            <div className="login-snip">
                                <input id="tab-1" type="radio" name="tab" className="sign-in" defaultChecked></input>
                                <label htmlFor="tab-1" className="tab">Login</label>
                                <input id="tab-2" type="radio" name="tab" className="sign-up"></input>
                                <label htmlFor="tab-2" className="tab">Sign Up</label>
                                <div className="login-space">
                                    <form className="login" onSubmit={handleSubmitSignIn}>
                                        <div className="group">
                                            <label htmlFor="user" className="label">Username</label>
                                            <input id="input-user1" type="text" className="input" onChange={handleUserNameChange} placeholder="Enter your username"></input>
                                        </div>
                                        <div className="group">
                                            <label htmlFor="pass" className="label">Password</label>
                                            <input id="input-pass1" type="password" className="input" onChange={handlePassChange} data-type="password" placeholder="Enter your password" autoComplete="on"></input> </div>
                                        <br></br>
                                        <br></br>
                                        <div className="group">
                                            <input type="submit" className="button" value="Sign In"></input>
                                        </div>
                                        <div className="hr"></div>
                                        <div className="foot"> <a href="#">Forgot Password?</a> </div>
                                    </form>
                                    <form className="sign-up-form" onSubmit={handleSubmitSignUp}>
                                        <div className="group"> <label htmlFor="user" className="label">Username</label> <input id="input-user2" type="text" className="input" placeholder="Create your Username" onChange={handleUserNameChange}></input> </div>
                                        <div className="group"> <label htmlFor="pass" className="label">Password</label> <input id="input-pass2" type="password" className="input" data-type="password" placeholder="Create your password" autoComplete="on" onChange={handlePassChange}></input> </div>
                                        <div className="group"> <label htmlFor="pass" className="label">Repeat Password</label> <input id="input-pass3" type="password" className="input" data-type="password" placeholder="Repeat your password" autoComplete="on" onChange={handlePassSignUpVerificationChange}></input></div>
                                        <div className="group"> <label htmlFor="user-name" className="label">Name</label> <input id="input-username" type="text" className="input" placeholder="Real name here" onChange={handleRealNameChange}></input> </div>
                                        <div className="group"> <label htmlFor="user-phone" className="label">Phone Number</label> <input id="input-user-phone" type="text" className="input" placeholder="Type phone number" onChange={handlePhoneChange}></input> </div>
                                        <div className="group"> <label htmlFor="user-email" className="label">Email</label> <input id="input-user-email" type="text" className="input" placeholder="Give us your email" onChange={handleEmailChange}></input> </div>
                                        <div className="group"> <label htmlFor="user-city" className="label">City</label> <input id="input-user-city" type="text" className="input" placeholder="What city are you in?" onChange={handleCityChange}></input> </div>
                                        <div className="group">
                                        <input type="submit" className="button" value="Sign Up"></input> </div>
                                        <div className="hr"></div>
                                        <div className="foot"> <label htmlFor="tab-1">Already Member?</label> </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignIn;
