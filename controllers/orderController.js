const orderModel = require('../models/orderModel')
const addItems = new orderModel.Items();

exports.addOrder= async(req,res)=>{
  console.log(req.url)
    addItems.addOrder(req.body).then((data)=>{
      console.log(data);
      res.status(200).send('success')
    }).catch((err)=>{
      console.log(err)
      res.status(400).send(err.message)
    })
        
}

const orderIns = new orderModel.Order();
exports.getItem  = async (req,res)=>{
    console.log(req.url)

    orderIns.getItems().then((data)=>{
        console.log(data)
        res.json(data);
    });
    
}

