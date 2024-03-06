
const deliveryModel = require('../models/deliveryModel')
const deliveryStaff = new deliveryModel.Delivery()
exports.addStaff= async(req,res)=>{
  deliveryStaff.addStaff(req.body).then((data)=>{
    console.log(data);
    res.status(200).send('success')
  }).catch((err)=>{
    console.log(err)
    res.status(400).send(err.message)
  })
    

    
}

const Staff = new deliveryModel.Staff
exports.getStaff  = async (req,res)=>{
    console.log(req.url)

    Staff.getStaff().then((data)=>{
        console.log(data)
        res.json(data);
    });
    
}
const delivery = new deliveryModel.Details()
exports.addDetails= async(req,res)=>{
  delivery.addDetails(req.body).then((data)=>{
    console.log(data);
    res.status(200).send('success')
  }).catch((err)=>{
    console.log(err)
    res.status(400).send(err.message)
  })
    

    
}

const Items = new deliveryModel.Items
exports.getDetails  = async (req,res)=>{
    console.log(req.url)

    Items.getDetails().then((data)=>{
        console.log(data)
        res.json(data);
    });
    
}