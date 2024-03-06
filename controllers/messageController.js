const messageModel = require('../models/messageModel')
const message = new messageModel.Message()
exports.messages= async(req,res)=>{
  message.messages(req.body).then((data)=>{
    console.log(data);
    res.status(200).send('success')
  }).catch((err)=>{
    console.log(err)
    res.status(400).send(err.message)
  })
    

    
}