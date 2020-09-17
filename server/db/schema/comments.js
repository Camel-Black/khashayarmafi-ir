var mongoose = require('mongoose')
var Schema = mongoose.Schema;


var comments = new Schema({
    name:{
        required:[true,"please enter your name"],
        type:String
    },
    email:{
        required:[true,"please enter your email"],
        type:String
    },
    content:{
        required:[true,"please enter Comment"],
        type:String
    },
    isReply:{
        type:Boolean,
        default:false
    },
    replyId:[
        {
            type:String
        }
    ],
    status:{
        type: Boolean,
        default:false
    },
    postId: String,
    timestamp: String

    
})


const Comments = mongoose.model('Comments',comments)

module.exports = Comments