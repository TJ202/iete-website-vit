const mongoose = require('mongoose')

const boardSchema = mongoose.Schema({
    boardImage: {
        type: String
    },
    designation: {
        type: String
    },
    description: {
        type: String
    },
    linkedin: {
        type: String
    }
})

const Board = mongoose.model('Board', boardSchema)

module.exports = Board