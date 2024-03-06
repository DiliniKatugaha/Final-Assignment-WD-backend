const db =require('../config/db')
class Message {
        constructor(){

        }

    async messages (message){
    
        console.log(message);
        const sql =  `INSERT INTO customer_messages 
                        (username, email, message) VALUES
                        ('${message.username}',
                        '${message.email}',
                        '${message.message}')`;

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
module.exports= {Message}