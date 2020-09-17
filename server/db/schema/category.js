var mongoose = require('mongoose')
var Schema = mongoose.Schema;


var category = new Schema({
    name:String
})

const Category = mongoose.model('Category', category)

module.exports = Category