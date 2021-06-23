import { useHistory } from 'react-router-dom';
import { useState } from 'react';



function NewAccount(props){

    const [accountType, setAccountType] = useState(0);
    const [balance, setBalance] = useState(0);
    const [branchCode, setBranchcode] = useState(0);
    const [bank, setBank] = useState(0);


    const handleAccountType = (e) => {
        setAccountType(e.target.value);
    }
    const handleBalance = (e) => {
        setBalance(e.target.value);
    }
    const handleBranchCode = (e) => {
        setBranchcode(e.target.value);
    }
    const handleBank = (e) => {
        console.log(props.accounts);
        setBank(e.target.value);
    }
    const history = useHistory();
    

    const handleAccountCreation = async (e) => {
        e.preventDefault();
            try{
                fetch(`http://localhost:6060/account`, {
                    "method": "POST",
                    "headers": {
                        "Content-Type": "application/json"
                    },
                    "body": JSON.stringify({
                        customerId: props.currentUser.customerId,
                        accountType: accountType,
                        balance: balance,
                        branchCode: branchCode,
                        bank: bank
                    })
                })
                    .then(res => res.json())
                    .then(data => {
                        props.setAccounts([...props.accounts, {...data}]);
                        
                    })
                history.push("/accounts");
            } catch (err) {
                console.error(err);
            }
    }
    

    return(

        <div className="container">
            <div className="row">
                <div className="col-md-6 mx-auto p-0">
                    <div className="card">
                        <div className="login-box">
                            <div className="login-snip">
                                <div className="login-space">
                                    <form className="create-account" onSubmit={handleAccountCreation}>
                                        <div className="group">
                                            <label htmlFor="user" className="label">Account Type</label>
                                            <input id="account-type" type="text" className="input" onChange={handleAccountType} placeholder="Enter the Account Type"></input>
                                        </div>
                                        <div className="group">
                                            <label htmlFor="pass" className="label">Balance</label>
                                            <input id="balance" type="text" className="input" onChange={handleBalance} placeholder="Enter your balance" autoComplete="on"></input> </div>
                                        <div className="group">
                                            <label htmlFor="pass" className="label">Branch Code</label>
                                            <input id="branch-code" type="text" className="input" onChange={handleBranchCode} placeholder="Enter the branch code" autoComplete="on"></input> </div>
                                        <div className="group">
                                            <label htmlFor="pass" className="label">Bank</label>
                                            <input id="bank" type="text" className="input" onChange={handleBank} placeholder="What Bank is the account with?" autoComplete="on"></input> </div>
                                        <br></br>
                                        <br></br>
                                        <div className="group">
                                            <input type="submit" className="button" value="create-account"></input>
                                        </div>
                                        <div className="hr"></div>
                                        
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
export default NewAccount;