const mongoose = require('mongoose')

const Schema = mongoose.Schema

const habitcardSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        trim: true
    },
    startDate: {
        type: Date,
        required: true,
        default: Date.now 
    },
    endDate: {
        type: Date,
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model('habitcard', habitcardSchema)
