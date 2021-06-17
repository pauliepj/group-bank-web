import React, { Component } from "react";
import AccountDataService from "../data/AccountDataService";

// const results = [];
// const fetchData = () => {
//     return (axios.get("http://localhost:9000/api/accounts/account/customer/1")
//       .then(
//         (result) => console.log(result.data.forEach(item => {
//           results.push({
//              id: item.accountId,
//              type: item.accountType,
//              balance: item.balance
//           });
//         }))
//       )
//     );
       
// }

class Account extends Component{
  
  constructor(props) {
    super(props)
    this.state = {
        accounts:[],
        message: null
    }
    this.refreshAccounts = this.refreshAccounts.bind(this)
  }

  componentDidMount() {
    this.refreshAccounts();
  }

  refreshAccounts() {
      AccountDataService.retrieveAccountsByCustomer(AccountDataService.CUSTOMER)
      .then(
          response => {
              console.log(response);
              this.setState({accounts: response.data})
          }
      );
  }
  render(){
    
    return(
    
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th>account Id</th>
              <th>Account Type</th>
              <th>Balance</th>
              <th>Bank</th>
              <th>Branch Code</th>
            </tr>
        </thead>
        <tbody>
          {
            this.state.accounts.map(
              account =>
              <tr key={account.accountId}>
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
}
export default Account