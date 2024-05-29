const express =require('express');
const router =require('./src/routes/api');
const app= new express();

const rateLimit =require('express-rate-limit');
const helmet =require('helmet');
const mongoSanitize =require('express-mongo-sanitize');

const xss =require('xss-clean');
const hpp =require('hpp');
const cors =require('cors');
const cookieParser = require('cookie-parser');
const path = require("path");

// Database Lib Import
const mongoose =require('mongoose');


// Security Middleware Implement
app.use(cookieParser());
app.use(cors())
app.use(helmet())
app.use(mongoSanitize())
app.use(xss())
app.use(hpp())

app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));


const limiter= rateLimit({windowMs:15*60*1000,max:3000})
app.use(limiter)

//! Mongo DB connection

const URI ="mongodb+srv://<username>:<password>@cluster0.981m0ts.mongodb.net/M_20_MERN_ECOMMERCE?retryWrites=true&w=majority"
const OPTION = {user:"faisal", pass:"faisal1994",  autoIndex:true}

mongoose
.connect(URI, OPTION)
.then(()=>{
    console.log("Successfully connected to the  database");
})
.catch((error)=>{
    console.log("something wrong:" + error);
})


app.set('etag', false);
app.use("/api/v1",router)

app.use(express.static('client/dist'));

// Add React Front End Routing
app.get('*',function (req,res) {
    res.sendFile(path.resolve(__dirname,'client','dist','index.html'))
})

module.exports=app;