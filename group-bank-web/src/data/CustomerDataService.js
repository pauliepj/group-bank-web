import axios from 'axios'

const CUSTOMER = '1';
const GENERAL_API_URL=`http://localhost:9000/api/customers/`;
const ACCOUNT_API_URL = `${GENERAL_API_URL}/customer/`;

class CustomerDataService {
    
    retrieveAllCustomers(name) {
        return axios.get(`${GENERAL_API_URL}/customer`);
    }
    retrieveProfileByCustomerId(name){
        return axios.get(`${ACCOUNT_API_URL}/${CUSTOMER}`);
    }
    
}

export default new CustomerDataService;