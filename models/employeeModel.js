const db = require('../config/db')
const validator = require('validator')
const bcrypt = require('bcrypt')

class Employee {
        constructor(){

        }
    async addEmployee (details){
        console.log(details)
        if (!details.email||!details.password) throw Error ('Email and Password Fields are required!')
        if(!validator.isEmail(details.email)) throw Error ('Email is not valid!');
        if(!validator.isStrongPassword(details.password)) throw Error('password is not strong enough!');

        const query = `SELECT * FROM user where user.email='${details.email}'`
        const res = await db.execute(query)
        console.log(res)

        if (res[0].length===1) throw Error('Email already signedup!');
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(details.password,salt);
    
        const sql = `INSERT INTO user 
                    (username, email, password, role) VALUES
                    ('${details.username}',
                    '${details.email}',
                    '${hash}',
                    '${details.role}')`;

        db.execute(sql).then((data)=>{
                            console.log(data[0])
                            return data
                        })
                       .catch((err)=>{
                            console.log(err.message)
                            return err
                       })
    }
}

class EmployeeList {
    constructor(username, email, role) {
            this.username = username,
            this.email = email,
            this.role = role
    }

    async getEmployee() {

        const query = `SELECT id,username,email,role FROM user where role <> 'customer'`
        const res = await db.execute(query).then(data => data[0])
       
        .catch(err => err)

        console.log(res);
        return res
    }
}
module.exports= {Employee , EmployeeList}