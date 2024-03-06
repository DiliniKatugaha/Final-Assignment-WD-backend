const signupModel = require('../models/employeeModel')
const employee = new signupModel.Employee()

exports.addEmployee= async (req,res)=>{
    employee.addEmployee(req.body).then((data)=>{
        console.log(data);
        res.status(200).send('success')
    }).catch((err)=>{
        console.log(err)
        res.status(400).send(err.message)
      })


}

const employeeList = new signupModel.EmployeeList
exports.getEmployee  = async (req,res)=>{
    console.log(req.url)

    employeeList.getEmployee().then((data)=>{
        console.log(data)
        res.json(data);
    });
    
}