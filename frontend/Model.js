const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    ID: String,
    salary: Number,
    department: String,
    email: String
});

const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;
