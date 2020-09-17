
const express= require('express')
const router = express.Router()
const postSchema = require("../db/schema/post")
const path = require('path')
// const dashify = require('dashify')
const {auth } = require('./middleware')
const categoryC = require('../controller/categoryConrtoller')
const userC = require('../controller/userController')
const moment = require('moment')
const multer = require('multer')
const categorySchema = require('../db/schema/category')
const commentC = require('../controller/commentController')
const postC = require('../controller/postController')
const { json } = require('body-parser')
const sendmail = require('sendmail')({silent: true});


const dashify =  function (titleStr){
    titleStr = titleStr.replace(/^\s+|\s+$/g, '');
    titleStr = titleStr.toLowerCase();
   //persian support
    titleStr = titleStr.replace(/[^a-z0-9_\s-ءاأإآؤئبتثجحخدذرزسشصضطظعغفقكلمنهويةى]#u/, '') 
    // Collapse whitespace and replace by -
        .replace(/\s+/g, '-')
        // Collapse dashes
        .replace(/-+/g, '-');
    return titleStr;       
}

const storage = multer.diskStorage({
    destination:function (req,file,cb) {
        cb(null,"../src/static")
    },
    filename:function (req,file,cb) {
        console.log(file.originalname)
        cb(null,Date.now() +file.originalname)
    },
    
})
// TODO create auth for registration
const upload =  multer({
    storage: storage,
    limits:{
        fileSize: 1500000
    }
})


/*
POSTS SECTION

here we create comments with name and email and etc...
ok lets go :)

*/

//send emails
router.post('/sendemail',(req,res)=>{
    let body = req.body
    console.log(body)
    try {
        sendmail({
            from: body.email,
            to: 'khashayar.mafi75@gmail.com',
            subject:"emial from website",
            html:`<p>${body.content}</p>`
        }, function(err, reply) {
            console.log(err && err.stack);
            console.dir(reply);
        })
        res.status(200).json({"meesage": "ایمیل فرستاده شد"})
        
    } catch (error) {
        
    }
    
})

//search post
router.post('/test',(req,res)=>{
    console.log(req.body)
    res.status(200).json({'res':res.body.Response})
})
router.post("/posts/sreach/:query",auth,async (req,res)=>{
    var query = req.params.query
    try {
        await postSchema.find({
            $text:{
                $search: query
            }
        },function(err,result){
            if (err) throw err;
            if (result) {
                res.status(200).json({"data":result})
            } else {
                res.status(400).json({"err":"err happend in search post"})
            }
        
        })
    } catch (error) {
        res.status(400).json({"err":error})
    }
})
//search post by tag
router.get('/posts/search/:tag',(req,res)=>{
    var tag = req.params.tag
    postC.findByTag(tag,(err,data)=>{
        if(err){
            return res.status(400).json({"success":false,"err":err})
        }
        res.status(200).json({"success":true,"data":data})
    })
    
})
//get post
router.get("/posts/all",(req,res)=>{
    postSchema.find((err,result)=>{
        if (err) res.send({"success":false , "err": err})
        res.send({"success":true,"result":result})
    })
})
//get post by title
router.get("/posts/:post",(req,res)=>{
    let rslug = req.params.post
    console.log("this is slug",rslug)
    postSchema.find({slug: rslug}) 

    .then(post => {
        if(post){
            res.status(200).json(post)
            console.log("this is post",post)
        }
        else{
            res.status(201).json(post)
        }
    }) 
    
    .catch(err => res.status(404).json({ success: fals})
    ); 
})
//delete Post
router.post("/posts/delete",auth,(req,res)=>{
    let id = req.body.postId
    console.log(id)
    try {
        // postSchema.findById(id).deleteOne((err,result)=>{

        
        // })
        var singlePost = postSchema.findById(id)
        singlePost
            .then(data=>{
                let comment = data.comments
                if(comment.length != 0 ){
                    commentC.deletManyById(comment,(err,message)=>{
                            if (err) return res.status(400).send({"success":false})
                        })
                    }
                })
        singlePost.deleteOne((err,data)=>{
            if(err){
                console.log("ss")
                return res.status(400).send({"success":false})
            }
            res.status(200).send({
                "success":true,
                "result":data
            }).end()
                
        })
        console.log(singlePost)
    } 
    catch (error) {
        console.log(error)
    }

})


//Update posts
router.post("/posts/update/:postId",auth,upload.single('file'),(req,res)=>{
    var localTime  = moment.utc().toDate();
    localTime = moment(localTime).format('YYYY-MM-DD HH:mm:ss');  
    var tms = moment(localTime).format("X");
    let img = req.file.filename
    let body =  JSON.parse(JSON.stringify(req.body));
    console.log(body)
    try {
        let getPost ={
            image: img,
            title :  body.title,
            content:  body.content,
            author:  body.author,
            slug: dashify(body.title),
            timestamp: tms
        }
        postSchema.findByIdAndUpdate(req.params.postId,getPost,(err,result)=>{
            if(err) res.send({"success":false})
            res.send({
                "success":true,
                "result":result
            })
        })
    } catch(err){
        res.status(400).json({
            "success":false,
            "result":err
        })
    }

})

//create new post
router.post("/posts/new",auth,upload.single('file'),(req,res)=>{
    console.log("kosse nanae noode")
    var localTime  = moment.utc().toDate();
    localTime = moment(localTime).format('YYYY-MM-DD HH:mm:ss');
    var tms = moment(localTime).format("X");
    let img = req.file.filename
    
    let body =  JSON.parse(JSON.stringify(req.body));
    var tags = body.tags.split(',')
    console.log(body)
    try {
        let getPost ={
            image: img,
            title :  body.title,
            content:  body.content,
            category: body.category,
            author:  body.author,
            slug: dashify(`${body.category} ${body.title}`),
            tags: tags,
            timestamp: tms
        } 
        console.log(getPost)
        //add to db
        var newPost = new postSchema(getPost)
        newPost.save((err,result)=>{
            if(err) console.log(err)//res.send({"success":false});
            else{
                console.log("new post added")
                res.send({"success":true , "result":result});
            }
        })
    } catch (error) {
        console.log(error)
        res.status(400).json({"err": error})
        
    }
})



/*
CATEGORY SECTION

here we create categrory etc...
ok lets go :)

*/

router.get('/posts/all/category',async (req,res)=>{
    categorySchema.find((err,result)=>{
        if (err) res.send({"success":false , "err": err})
        res.send({"success":true,"result":result})
    })
})

router.post('/posts/new/category',auth,async (req,res)=>{
    let {category} = req.body
    console.log(category)
    if(typeof category !== 'string' || category == ''){
        return res.status(400).json({'err':'Enter valid Category'})
    }
    
    else{
        var exist = await categoryC.isExist(category)
        if(exist){
            return res.status(400).json({"err":"category existed"})
        }
        else{
            
            try {
                await categoryC.addCategory(category)
                return res.status(200).json({"success":true})
            } catch (error) {
                return res.status(400).json({'err': error})
            }
        }
        
    }

    

})
router.post('/posts/delete/category', (req,res)=>{
    
    
    let {categories} = req.body
    
    try {
        let result =  categoryC.deleteCategoryById(categories)
        console.log(result)
        res.status(200)
    } catch (error) {
        console.log(error)
        res.status(400)
    }
})



/*
COMMENTS SECTION

here we create comments with name and email and etc...
ok lets go :)

*/


//get all comments of a specific post
router.post("/posts/:postId/comments",(req,res)=>{

})

router.post("/comment/pendings",auth,async (req,res)=>{
    try {
        await commentC.findCommentsBystastus(false,(err,comments)=>{
            if(err) {
                return res.status(401).json({"err" : err})
            }
            res.status(200).json({"data" : comments})
        })

    } catch (error) {
        console.log(error)
        res.status(400).json({"err":error})
    }
})
router.post("/comment/:status",auth,async (req,res)=>{
    try {
        var commentid = req.body.commentid
        console.log(commentid)
        var status = req.params.status
        if(status == "true") status = true
        else{
            status = false
        }
        var postid = req.body.postid
        commentC.commentsStatusCondition(postid,commentid,status,(err,message)=>{
            if(err){
                console.log(err)
                return res.status(401).json({"err" : err})
            }
            console.log(message)
            res.status(200).json({"message": message})
        })
    } catch (err) {
        console.log(err)
         res.status(401).json({"err" : err})
    }
})
//add new comment to a post
router.post("/posts/:postId/newcomment",async (req,res)=>{
    var data = req.body
    var localTime  = moment.utc().toDate();
    localTime = moment(localTime).format('YYYY-MM-DD HH:mm:ss');
    var tms = moment(localTime).format("X");
    data["postId"] = req.params.postId
    data['timestamp'] = tms
    console.log(data)
    // console.log(data.postId)
    console.log(`${req.params.postId}`)

         await commentC.newComment(data,(err,message)=>{
             if(err){
                 console.log(err)
                return res.status(400).json({"err" : message})

             }
             res.status(200).json({"message":message})
         })


    
})
//get all comments
router.get('/:postid/comment/all/',(req,res)=>{
    let postid = req.params.postid
    commentC.getAllByPostId(postid,(err,data)=>{
        if(err) return res.status(401).json({'message':'err happend in get all post id'})
        res.status(200).json({'data':data})
    })
})

//delete comment
router.post("/comment/delete",async (req,res)=>{
    var {commentId,postId} = req.body
    await commentC.deleteCommentById(postId,commentId,(err,message)=>{
        if(err) {
            console.log(err)
            return res.status(401).json({"err":err})
        }
        else{
            res.status(200).json({message})
        }
    })
})

/*
USER SECTION - - - - - - - - -  - - - - - 0_0

here we create comments with name and email and etc...
ok lets go :)

*/


router.post('/user/register',async (req,res)=>{
     var data = {
         email:req.body.email,
         password:req.body.password,
         username:req.body.username,
         access: (req.body.access) ? req.body.access : 1
        }

    try {
        let ix = await userC.getByUsername(data.username)
        console.log(`${ix} ix`)
        if(ix === "true"){
            console.log("s")
            return res.status(400).json({"seccess":false , "message":"Username Already Taken :/ "})
        }
        await userC.addUser(data)
       
        res.status(200).json({"success":true})

    } catch (error) {
        console.log("%c catch", "color:#FF0000")
        console.log(error)

    }
})

router.post('/user/login',async (req,res)=>{
    try {
        var {username , password } = req.body
        var user = await userC.compareUserPassword(username,password)
        if(!user){
            return res.status(401).json({error:"Who Are You?"})
        }
        var token = await userC.tokenGenerator(user)
        console.log(token)
        res.status(200).json({token})
    } catch (error) {
        console.log(error)
        res.status(400).json({"success":false, "message":"err happend on /user/login route"})
    }

})

router.get('/user/dashboard',auth,async (req,res)=>{

})
router.get('/here',(req,res)=>{
    userC.print()
    res.json({"ok":true})
})


module.exports = router