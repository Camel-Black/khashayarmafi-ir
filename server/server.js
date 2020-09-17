const express = require('express')
const mongoose = require('mongoose')
var cors = require('cors')
var app = express();
const morgan =require('morgan')
var bodyParser = require('body-parser')
var session = require('cookie-session')
var flash = require('express-flash')
var  Sentry = require('@sentry/node');
Sentry.init({ dsn: "https://032c65cfa122446f9db2f2cd8bbbd858@o365232.ingest.sentry.io/4997726" });

mongoose.set('useFindAndModify', true);
mongoose.set('useCreateIndex', true);


//db config
mongoose.connect("mongodb://localhost:27017/khashayarir",{useUnifiedTopology: true,useNewUrlParser: true,useFindAndModify:false})
mongoose.connection.on("connected",(err)=>{
    if(err) throw err;

    else console.log("database connected !!")
})

//routs
var apiRouter = require('./routes/api')

//multer

app.use(Sentry.Handlers.errorHandler());
//usages
app.use(Sentry.Handlers.requestHandler());
app.use(cors({    
    origin: ['http://localhost:8080'],
    credentials: true
}))
app.use(bodyParser({limit: '50mb'}));
app.use(express.json())
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }))
app.use("/api",apiRouter)
app.use(flash())
app.use(session({
    name: 'mysession',
    keys: ['vueauthrandomkey'],
    maxAge: 48 * 60 * 60 * 1000 // 48 hours
}))



app.use(function onError(err, req, res, next) {
    // The error id is attached to `res.sentry` to be returned
    // and optionally displayed to the user for support.
    res.statusCode = 500;
    res.end(res.sentry + "\n");
  });

//host
app.listen(3000,err=>{
    try {
        console.log("port 3000")
    } catch (err) {
        console.log(err)
    }
})

