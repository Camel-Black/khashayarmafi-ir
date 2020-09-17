const post = require('../db/schema/post')

module.exports = {
    addComment: async function(commentId,postId,cb){
        try {
            console.log(`-----------postcon----- commnet_id : ${commentId} \n post_id : ${postId} \n -----------postcon-----`)
            await post.update({_id :postId},{
                    $push:{
                        comments : commentId
                    }
                })
                .catch((err)=>{
                    console.log(err)
                    cb(err)
                })
        } catch (error) {
            console.log(error)
            cb(error)
        }
    },
    removeCommentsOfPost: async function(commentId,postId,cb){
        console.log("man injam")
        await post.updateOne({_id :postId},{
            $pull:{
                comments : commentId
            }
        })
            .catch((err)=>{
                console.log(err)
                cb(err)
            })
    },
    deleteByCategorie:async function(category,cb){
        await post.deleteMany({category : category})
        .then(data=>{
            cb(false,data)
        })
        .catch(err=>{
            cb(err)
        })
    },
    findByTag: async function(tag,cb){
        console.log(tag)
        await post.find({tags: tag})
            .then(data=>{
                console.log(data)
                cb(null,data)
            })
            .catch(err=>{
                cb(err)
            })
    }
}