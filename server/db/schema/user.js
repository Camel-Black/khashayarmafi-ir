var mongoose = require('mongoose')
var bcrypt = require('bcrypt')
var jwt = require('jsonwebtoken')
var Schema = mongoose.Schema;


var userSchema = new Schema({
    image:String,
    username:{
        type:String,
        required:[true,"Please Enter Username"]
    },
    password:{
        type:String,
        required:[true,"Please Enter password"]
    },
    email:{
        type:String,
        required:[true,"Please Enter email"]
    },
    access:{
        type:Number,
        default: 1
    },
    tokens:[{
        token:{
            type:String,
            required:true
        }
    }]
})

// userSchema.pre('save',async function(next){
//     var user = this
//     if(user.isModified('password')){
//         user.password = bcrypt.hash(user.password,10)
//     }
//     next()
// })

// userSchema.methods.generateAuthToken = async function() {
//     const user = this;
//     const token = jwt.sign({ _id: user._id, name: user.name, email: user.email },
//     "secret");
//     user.tokens = user.tokens.concat({ token });
//     await user.save();
//     return token;
//   };
  


// userSchema.statics.findByUsername = async function(username,password){
//     const user = await User.findOne({username})
//     console.log(user)
//     if(!user){
//         throw new Error({error:"invalid username"})
//     }
//     var ispassword = bcrypt.compare(password,user.password)
//     if(!ispassword){
//         throw new Error({error : "invalid password"})
//     }
//     return user
    
// }

const User = mongoose.model('User',userSchema)

module.exports = User