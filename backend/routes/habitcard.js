const express = require('express')
const {
    createHabitcard,
    getHabitCard,
    getHabitcards,
    deleteHabitcard,
    updateHabitcard
} = require('../controllers/habitcards')

const router = express.Router()

//GET all habit cards
router.get('/', getHabitcards)

//GET a single habit card
router.get('/:id', getHabitCard)

//POST a new habit card
router.post('/', createHabitcard)

//DELETE a habit card
router.delete('/:id', deleteHabitcard)

//UPDATE a habit card
router.patch('/:id', updateHabitcard)

module.exports = router