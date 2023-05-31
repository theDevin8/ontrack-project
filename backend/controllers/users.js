const User = require('../models/users')

//login user 
const loginUser =  async (req, res) => {
    res.json({mssg: 'login user'})
}

//register user
const registerUser = async (req, res) => {
    res.json({mssg: 'register user'})
}

module.exports = { loginUser, registerUser }