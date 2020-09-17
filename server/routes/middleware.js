var jwt = require('jsonwebtoken')




module.exports={
    auth: function(req,res,next) {
        try {
            const token = req.headers.authorization.replace("Bearer ", "");
            console.log(token);
            const decoded = jwt.verify(token, "secret");
            req.userData = decoded;
            // console.log(req.userData);
            next();
          } catch (err) {
            console.log("Authentification Failed")
            return res.status(401).json({
              message: "Authentification Failed"
            });
          }
    },
    multererr: function(req,file,cb){
      let allowed = ['image/png','image/jpeg','image/jpg']
      console.log(req)
      if(!allowed.includes(file.mimetype)){
        const err = new Error("Wrong File Type")
        err.code = "LIMIT_FILE_TYPES"
        return cb(err,flase);
      }
    }
}