const mongoose = require('mongoose')
var Schema = mongoose.Schema

var post = new Schema({
    image:String,
    title:String,
    content:String,
    author:String,
    comments:[{
        type:String
    }],
    slug:{
        required: true,
        type:String,
        unique:true
    },
    timestamp: String,
    category:String,
    tags:[String]

})

const Post = mongoose.model('Post',post)
module.exports = Post