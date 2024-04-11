import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EmployeeList = () => {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        fetchEmployees();
    }, []);

    const fetchEmployees = async () => {
        try {
            const response = await axios.get('/employees');
            setEmployees(response.data);
        } catch (error) {
            console.error('Error fetching employees:', error);
        }
    };

    return (
        <div>
            <h2>Employee List</h2>
            <ul>
                {employees.map((employee) => (
                    <li key={employee._id}>
                        {employee.firstName} {employee.lastName} - {employee.email}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default EmployeeList;


import React from 'react';
import ReactDOM from 'react-dom';
import EmployeeForm from './EmployeeForm';
import EmployeeList from './EmployeeList'; // Assuming EmployeeList.js is in the same directory

const App = () => {
    return (
        <div>
            <h1>Employee Management System</h1>
            <EmployeeForm />
            <EmployeeList />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root')); // Assuming you have a root element in your HTML file
