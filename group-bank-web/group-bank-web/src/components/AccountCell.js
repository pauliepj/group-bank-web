import { Component } from "react";
import AccountDataService from "../data/AccountDataService";
import axios from "axios";


class AccountCell extends Component{
    
    render(){
        return(
            <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                        </tr>
        );
    }
}
export default AccountCell;