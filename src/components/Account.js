import React, { Component, useEffect } from "react";

function Account(props){
    
  const matches = props.accounts.filter(user=>user.customerId===props.currentUser.customerId);
  

    return(
    
      <div className="container">
        <table className="table">
          <thead>
            <tr>
            <th>Customer ID</th>
              <th>account number</th>
              <th>Account Type</th>
              <th>Balance</th>
              <th>Bank</th>
              <th>Branch Code</th>
            </tr>
        </thead>
        <tbody>
          {
            matches.map(
              account =>
              <tr>
              <td>{props.currentUser.customerId}</td>
              <td>{account.accountId}</td>
              <td>{account.accountType}</td>
              <td>{account.balance}</td>
              <td>{account.bank}</td>
              <td>{account.branchCode}</td>
              </tr>
            )
          }
        </tbody>
      </table>
      </div>
    )
  
}
export default Account;