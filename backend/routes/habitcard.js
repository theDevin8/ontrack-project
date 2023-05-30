const express = require('express')
const {
    createHabitcard
} = require('../controllers/habitcards')

const router = express.Router()

//GET all habit cards
router.get('/', (req, res) => {
    res.json({mssg: 'Get all habit cards'})
})

//GET a single habit card
router.get('/:id', (req, res) => {
    res.json({mssg: 'Get a single habit card'})
})

//POST a new habit card
router.post('/', createHabitcard)

//DELETE a habit card
router.delete('/:id', (req, res) => {
    res.json({mssg: 'Delete a habit card'})
})

//UPDATE a habit card
router.patch('/:id', (req, res) => {
    res.json({mssg: 'Update a habit card'})
})

module.exports = router