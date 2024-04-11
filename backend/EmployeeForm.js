import React, { useState } from 'react';
import axios from 'axios';

const EmployeeForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        ID: '',
        salary: '',
        department: '',
        email: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/employees', formData);
            console.log('Employee added:', response.data);
            // Clear form after successful submission
            setFormData({
                firstName: '',
                lastName: '',
                ID: '',
                salary: '',
                department: '',
                email: ''
            });
        } catch (error) {
            console.error('Error adding employee:', error);
        }
    };

    return (
        <div>
            <h2>Add Employee</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="First Name"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    placeholder="Last Name"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    placeholder="ID"
                    name="ID"
                    value={formData.ID}
                    onChange={handleChange}
                />
                <input
                    type="number"
                    placeholder="Salary"
                    name="salary"
                    value={formData.salary}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    placeholder="Department"
                    name="department"
                    value={formData.department}
                    onChange={handleChange}
                />
                <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />
                <button type="submit">Add Employee</button>
            </form>
        </div>
    );
};

export default EmployeeForm;

