const express= require('express')
const controller = require('../controllers/messageController')
const router = express.Router();

router.route('/customermessages').post(controller.messages)

module.exports= router;