require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const habitcardRoutes = require('./routes/habitcard')

//express app
const app = express()

//middleware
app.use(express.json())

app.use((req,res, next) => {
    console.log(req.path, req.method)
    next()
})
//routes
app.use( '/api/habitcards', habitcardRoutes)

//connect to mongoose 
mongoose.connect(process.env.DATABASE)
.then(() => {
    app.listen(process.env.PORT, () => {
        console.log('connected to MongoDB & listening on port', process.env.PORT);
    })
})
.catch((error) => {
    console.log(error)
})
