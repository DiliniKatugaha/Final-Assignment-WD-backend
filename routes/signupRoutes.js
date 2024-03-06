const express = require('express');
const controller = require('../controllers/signupController');
const router = express.Router();

router.route('/signupdata').post(controller.signupDetails)
router.route('/signindata').post(controller.signinDetails)
router.route('/customerdata').post(controller.customerDetails)

module.exports= router;