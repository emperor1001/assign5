const Employee = require('../model/Model');

// Function to create a new employee
const createEmployee = async (employeeData) => {
    try {
        const employee = new Employee(employeeData);
        await employee.save();
        return employee;
    } catch (error) {
        throw error;
    }
};

// Function to get all employees
const getAllEmployees = async () => {
    try {
        return await Employee.find();
    } catch (error) {
        throw error;
    }
};

module.exports = {
    createEmployee,
    getAllEmployees
};
