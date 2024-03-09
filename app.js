const express = require('express')
const cors = require('cors')

require ('dotenv').config()

const orderRouter = require('./routes/orderRoutes')
const deliveryRouter = require('./routes/deliveyRoutes')
const adminRouter = require('./routes/adminRoutes')
const messageRouter = require('./routes/messageRoutes')
const signupRouter = require('./routes/signupRoutes')
// const signinRouter = require('./routes/signinRoutes')
const employeeRouter = require('./routes/employeeRoutes')
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}))

app.use('/order',orderRouter)
app.use('/delivery',deliveryRouter)
app.use('/admin',adminRouter)
app.use('/message',messageRouter)
app.use('/user',signupRouter)
// app.use('/signin',signinRouter)
app.use('/employee',employeeRouter)

app.listen(process.env.PORT, ()=>{
    console.log('listing on port :',process.env.PORT)
})