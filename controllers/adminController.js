
const adminModel = require('../models/adminModel')

const admin = new adminModel.Admin()
exports.getUsers= async(req,res)=>{

    admin.getUsers().then((data)=>{
       res.json(data);
    }).catch((err)=>{
        res.send(err.message)
    })
   
}

exports.setpermision = async (req,res)=>{

  admin.setAccess(req.body).then(()=>{
    res.send('success')
  }).catch((err)=>{
    res.send(err.message);
  })
}