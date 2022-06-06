const mongoose = require('mongoose')

const domainSchema = mongoose.Schema({
    domainIcon: {
        type: String
    },
    domainName: {
        type: String
    },
    description: {
        type: String
    }
})

const Domain = mongoose.model('Domain', domainSchema)

module.exports = Domain