import axios from 'axios';

export function getEmployees(setEmployeeList)  {
    axios.get('http://localhost:8080/employee')
        .then(res => {
            setEmployeeList(res.data);
        });
}