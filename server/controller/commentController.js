const commentSchema = require('../db/schema/comments')
const post = require('./postController')

module.exports = {
    newComment: async function(comment,cb){
        console.log(comment);
        
        try {
            let data  = new commentSchema(comment)
            await data.save()
                .then(data=>{
                    cb(false,`comment added succefully: ${data}`)
                })
            
        } catch (error) {
            console.log(error)
            cb(true,error)
        }
    },
    commentsStatusCondition: async function(postId,commentId,status,cb){
        // console.log(`-----status---- \n ${status} --- \n ${typeof(status)} ---- \n`)
        if(status){
            // console.log(`-----------commentcon----- commnet_id : ${commentId} \n post_id : ${postId} \n -----------commentcon-----`)
            
            await post.addComment(commentId,postId,(err)=>{
                if(err) cb(err)

            }).then(()=>{
                commentSchema.updateOne({_id: commentId},{
                    "status": true
                }).then(data=>{
                    if(data.nModified == 1){
                        cb(null, "success")
                    }
                    else{
                        cb(`${data.nModified} the number off modified`)
                    }
                })
                
            }).catch(err=>{
                cb(err)
            })
        }
        else{
            // console.log("S")
            // console.log
            await commentSchema.findByIdAndDelete(commentId)
                .then(data=>{
                    console.log(`data: ${data}`)
                    console.log(`commentId: ${commentId}`)
                    // console.log("adadadadad-------")
                    cb(null,`deleted successfully ${data}`)
                })
                .catch((err)=>{
                    // console.log("adwhahas-------")
                    cb(err)
                })
                
        }
    },
    findCommentsBystastus:async function(key,cb){
        await commentSchema.find({status : key},(err,docs)=>{
            if(err) cb(err)
            console.log(docs)
            cb(null,docs)
        })

    },
    findCommentById:async function(commentid,cb){
        await commentSchema.findById(commentid)
            .then(data=>{
                cb(null,data)
            })
            .catch(err=>{
                cb(err)
            })
    },
    deleteCommentById:async function(postId,commentId,cb){
        await commentSchema.findByIdAndDelete(commentId)
            .then(()=>{
                post.removeCommentsOfPost(commentId,postId,err=>{
                    if(err) cb(err)
                    else{
                        cb(null,{"message":"comment removed succesfulley"})
                    }
                })
            })
    },
    getAllByPostId:async function(postid,cb){ //for accepted comments
        await commentSchema.find({postId : postid,status: true})
        .then((data)=>{
            cb(null,data)
        })
        .catch(err=>{
            cb(err,{'message':'err happen in get all comments from single post'})
        })
    },
    deletManyById: async function(array,cb){ //id arrays
        console.log("inja")
        await commentSchema.deleteMany({
            _id:{
                $in: array
            }
        })
            .then(data=>{
                console.log("akdhsj")
                cb(false,`comments of post succefully deleted  ||| result: ${data}`)
            })
            .catch(err=>{
                console.log("sss")
                cb(true,`err acurred comments of post delete  ||| result: ${err}`)
            })
    }
}