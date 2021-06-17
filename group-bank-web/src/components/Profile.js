import React, { Component } from "react";
import CustomerDataService from "../data/CustomerDataService"


class Profile extends Component{
    constructor(props) {
      super(props);
      
      this.state = {
          details:[],
          message: null
      }
      this.refreshProfile = this.refreshProfile.bind(this)
    }
  
    componentDidMount() {
        
      this.refreshProfile();
    }
  
    refreshProfile() {
        
        CustomerDataService.retrieveProfileByCustomerId(CustomerDataService.CUSTOMER)
        .then(
            response => {
                console.log(response);
                // let details = [];
                // for (var i in response.data) {
                //     details.push({ name: i, value: response.data[i] })
                // }
                this.setState({details: response.data})
            }
        );
    }
    render(){
      
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
            {
              this.state.details.map(
                profile =>
                <tr key={profile.customerId}>
                <td>{profile.customerName}</td>
                <td>{profile.userName}</td>
                <td>{profile.password}</td>
                <td>{profile.phone}</td>
                <td>{profile.email}</td>
                <td>{profile.city}</td>

                </tr>
              )
            }
          </tbody>
        </table>
        </div>
      )
    }
  }

export default Profile;