// const db = require('../config/db')
// const validator = require('validator')
// const bcrypt = require('bcrypt')
// class Signin {
//     constructor (){
        
//     }

   
//     async signinDetails(details){
//         console.log(details.username,details.email,details.password)
//         if (!details.email||!details.password) throw Error ('Email and Password Fields are required!')
//         if(!validator.isEmail(details.email)) throw Error ('Email is not valid!');

//         const query = `SELECT * FROM user where user.email='${details.email}'`
//         const res = await db.execute(query)
//         console.log(res)

//         if (res[0].length===0) throw Error('Invalied Email!');

//         console.log(res[0][0].password)
        
//         const match = await bcrypt.compare(details.password, res[0][0].password);
//         if (!match) {
//             throw new Error('Invalid password');
//         }
    
//         return true;


        
        
//     }
// }

// module.exports = {Signin}