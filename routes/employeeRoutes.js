const express = require('express');
const controller = require('../controllers/employeeController');
const router = express.Router();

router.route('/addemployee').post(controller.addEmployee)
router.route('/getemployee').post(controller.getEmployee)


module.exports= router;