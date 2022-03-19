const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ClientSchema = new Schema({
    name: {type: String},
    lastName: {type: String},
    age: {type: Number},
    subTotal: {type: Number}
})

module.exports = Client = mongoose.model('Client', ClientSchema)