const express = require('express')

//controller functions
const { loginUser, registerUser } = require('../controllers/users')

const router = express.Router()

//login route
router.post('/login', loginUser)

//register route
router.post('/register', registerUser)

module.exports = router