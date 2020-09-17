const bcrypt= require('bcrypt')
const userSchema = require('../db/schema/user')
const jwt = require('jsonwebtoken')

module.exports={
    print: ()=>{
        console.log("here")
    },
    addUser: async function(userInfo,cb){
        
        let pass = await bcrypt.hash(userInfo.password,10)
        let token = await jwt.sign({username: userInfo.username,access: userInfo.accsess,email: userInfo.email},"secret")
        try {
            var user = new userSchema({
                username: userInfo.username,
                password: pass,
                accsess: userInfo.accsess,
                email: userInfo.email,

            })
            user.tokens = user.tokens.concat({token})
            var s =  await user.save()
            return s 

        } catch (error) {
            console.log(error)
            throw new Error({error: "an err happend in save user"})
        }

        
    },
    getByUsername: async function(username,bool){
        var user = await userSchema.findOne({username})
        if(user){
            if(bool){
                return user
            }
            else{
                return "true"
            }
        }
        else{
            if(bool){
                return false
            }
            return "flase"
        }
    },
    deleteUser: async function(username){
        try {
            var result = userSchema.findOneAndDelete({username})
            return result
        } catch (error) {
            console.log(error)
        }
        
    },
    editUser: async function(username){
        
    },
    compareUserPassword: async function(username,password){
        try {
            let user = await this.getByUsername(username,true)
            console.log(user)
            if(!user){
                return false
            }
            let result = await bcrypt.compare(password,user.password)
            if(result)
            return user

            else return false
            
        } catch (error) {
            console.log(error)
        }
        
    },
    tokenGenerator: async function(data){
        if(data){
            return jwt.sign({username: data.username,access: data.accsess,email: data.email},"secret")
        }
        else {
            return false
        }
    }
    
}