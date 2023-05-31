const habitCard = require('../models/habitcard')
const mongoose = require('mongoose')

//get all habitcards
const getHabitcards = async (req , res) => {
    const habitcards = await habitCard.find({}).sort({createdAt: -1})

    res.status(200).json(habitcards)
}

//get a single habitcard
const getHabitCard = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return  res.status(404).json({error: 'No such habit card'})
    }
    const habitcard = await habitCard.findById(id)
    if(!habitcard){
        return res.status(404).json({error: 'No such habit card'})
    }

    res.status(200).json(habitcard)
}


//create new habitcard
const createHabitcard = async(req, res) => {
    const {title, description, startDate, endDate} = req.body

    let emptyFields = []
    if(!title){
        emptyFields.push('title')
    }
    if(!startDate){
        emptyFields.push('Start Date')
    }
    if(!endDate){
        emptyFields.push('End Date')
    }
    if(emptyFields.length > 0){
        return res.status(400).json({error: 'Please fill in all the fields', emptyFields})
    }
    //add doc to db
    try {
        const habitcard = await habitCard.create({title, description, startDate, endDate})
        res.status(200).json(habitcard)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

//delete a habitcard
const deleteHabitcard = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such habit card' })
    }

    const habitcard = await habitCard.findOneAndDelete({ _id: id })
    if (!habitcard) {
        return res.status(404).json({ error: 'No such habit card' })
    }

    res.status(200).json(habitcard)
}
//update a habitcard
const updateHabitcard = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such habit card' })
    }
    
    const habitcard = await habitCard.findOneAndUpdate({_id: id}, {
        ...req.body
    })
    if (!habitcard) {
        return res.status(404).json({ error: 'No such habit card' })
    }
    
    res.status(200).json(habitcard)
}

module.exports= {
    createHabitcard,
    getHabitCard,
    getHabitcards,
    deleteHabitcard,
    updateHabitcard
}