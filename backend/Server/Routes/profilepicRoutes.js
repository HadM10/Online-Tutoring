const express = require('express')

const router = express.Router()

const userController = require('../Controllers/userController');

router.route('/')
    .post(userController.uploadPhoto)

module.exports = router