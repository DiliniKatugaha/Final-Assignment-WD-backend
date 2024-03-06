const express = require('express')
const controller = require('../controllers/adminController')
const router = express.Router();

router.route('/getUsers').get(controller.getUsers)
router.route('/setpermision').post(controller.setpermision)

module.exports= router;