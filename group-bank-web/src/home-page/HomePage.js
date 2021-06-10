import Footer from "../components/Footer";
import Header from "../components/Header";
import React from "react";


class HomePage extends React.Component{
    render(){
    return(
        <div>
            <div className="jumbotron">
                <h1>Welcome to Ultra-Group Bank! Use the nav buttons to view your accounts and personal info.</h1>
            </div>
        </div>
    );
    }
}

export default HomePage;