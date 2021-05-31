const express = require('express')
const router = express.Router()

//employee data
let employees = [
    {
        id : '_asfdff',
        first_name:'John',
        last_name:'Wilson',
        email:'john@gmail.com',
        gender:'Male',
        ip_address:'123.43.1.3'
    },
    {
        id : '_askdkd',
        first_name:'Rose',
        last_name:'Keller',
        email:'rosekeller@gmail.com',
        gender:'Female',
        ip_address:'192.13.12.23'
    }
]

//Get ID
let getID = () => {
    return '_' + Math.random().toString(36).substr(2, 9)
}

//GET - Employee
router.get('/employees', (req,res) => {
    console.log(`GET Request Received at a server...${new Date().toLocaleTimeString()}`)
    res.json(employees)
})

//POST Request
router.post('/employees', (req, res) => {
    let employee = {
        id : getID(),
        first_name : req.body.first_name,
        last_name : req.body.last_name,
        email : req.body.email,
        gender : req.body.gender,
        ip_address : req.body.ip_address
    }
    employees.push(employee)
    console.log(`POST Request Received at a server...${new Date().toLocaleTimeString()}`)
    res.json({msg : 'Post Request is success'})
})

//PUT Request
router.put('/employees/:id', (req, res) => {
    let empID = req.params.id
    let updateEmployee = {
        id : empID,
        first_name : req.body.first_name,
        last_name : req.body.last_name,
        email : req.body.email,
        gender : req.body.gender,
        ip_address : req.body.ip_address
    }
    let existingEmployee = employees.find((employee) => {
        return employee.id === empID
    })
    employees.splice(employees.indexOf(existingEmployee),1,updateEmployee)
    console.log(`PUT Request Received at a server...${new Date().toLocaleTimeString()}`)
    res.json({msg : 'PUT Request is success'})
})

//DELETE Request
router.delete('/employees/:id', (req, res) => {
    let empId = req.params.id
    employees = employees.filter((employee) => {
        return employee.id != empId
    })
    console.log(`DELETE Request Received at a server...${new Date().toLocaleTimeString()}`)
    res.json({msg : 'DELETE Request is success'})
})


module.exports = router