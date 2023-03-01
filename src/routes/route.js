const express = require('express');
const router = express.Router()

const userController = require('../controller/userController.js')


router.post('/userCreation', userController.createUser)

// for get userData
router.get("/getData", userController.getUser )

// for update ratings
router.put('/updation/:userId', userController.updateUser)



module.exports = router