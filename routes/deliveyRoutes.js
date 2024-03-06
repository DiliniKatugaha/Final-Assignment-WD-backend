const express = require('express')
const controller = require('../controllers/deliveryController')
const router = express.Router();


router.route('/addstaff').post(controller.addStaff)
router.route('/getstaff').post(controller.getStaff)
router.route('/details').post(controller.addDetails)
router.route('/getdetails').post(controller.getDetails)

module.exports= router;