import axios from 'axios'

const CUSTOMER = '1';
const GENERAL_API_URL=`http://localhost:9000/api/accounts`;
const ACCOUNT_API_URL = `${GENERAL_API_URL}/account/customer/`;

class AccountDataService {
    
    retrieveAllAccounts(name) {
        return axios.get(`${GENERAL_API_URL}/account`);
    }
    retrieveAccountsByCustomer(name){
        return axios.get(`${ACCOUNT_API_URL}/${CUSTOMER}`);
    }
    
}

export default new AccountDataService;