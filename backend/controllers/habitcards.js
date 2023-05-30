const habitCard = require('../models/habitcard')

//get all habitcards
const getHabitcards = async (req , res) => {
    const habitcards = await habitCard.find({}).sort({createdAt: -1})

    res.status(200).json(habitcards)
}

//get a single habitcard
const getHabitCard = async (req, res) => {
}


//create new habitcard
const createHabitcard = async(req,res) => {
    const {title, description, startDate, endDate} = req.body

    //add doc to db
    try {
        const habitcard = await habitCard.create({title, description, startDate, endDate})
        res.status(200).json(habitcard)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
    res.json({mssg: 'Post a new habit card'})
}

//delete a habitcard

//update a habitcard

module.exports= {
    createHabitcard
}