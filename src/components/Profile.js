import React, { Component, useEffect, useState } from "react";
import CustomerDataService from "../data/CustomerDataService"


function Profile(){
  
  const [profile, setProfile] = useState([]);  

  const fetchProfile = async () => {
    try{
      fetch('http://localhost:7060/dummycustomer', {
          "method": "GET",
          "headers": {
              "Content-Type": "application/json"
          },
      })
          .then(res => res.json())
          .then(data => {
              setProfile(data);
          })
  } catch (err) {
      console.error(err);
  }
  }

  
    useEffect(() =>{
      fetchProfile();
    },[])
      
      return(
      
        <div className="container">
          <table className="table">
            <thead>
              <tr>
                <th>Customer Id</th>
                <th>Name</th>
                <th>UserName</th>
                <th>Password</th>
                <th>Phone #</th>
                <th>Email</th>
                <th>City</th>
              </tr>
          </thead>
          <tbody>
                
                <tr>
                <td>{profile.customerId}</td>
                <td>{profile.customerName}</td>
                <td>{profile.userName}</td>
                <td>{profile.password}</td>
                <td>{profile.phone}</td>
                <td>{profile.email}</td>
                <td>{profile.city}</td>

                </tr>
              
            
          </tbody>
        </table>
        </div>
      )
    
  }

export default Profile;