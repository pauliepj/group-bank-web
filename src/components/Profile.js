import React, { Component, useEffect, useState } from "react";
import CustomerDataService from "../data/CustomerDataService"


function Profile(props){
  
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
                <td>{props.currentUser.customerId}</td>
                <td>{props.currentUser.customerName}</td>
                <td>{props.currentUser.userName}</td>
                <td>{props.currentUser.password}</td>
                <td>{props.currentUser.phone}</td>
                <td>{props.currentUser.email}</td>
                <td>{props.currentUser.city}</td>

                </tr>
              
            
          </tbody>
        </table>
        </div>
      )
    
  }

export default Profile;