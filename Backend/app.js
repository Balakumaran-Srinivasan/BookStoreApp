 const express = require('express');
 const mongoose = require('mongoose')
 const bodyParser = require('body-parser');
 const morgan = require('morgan')
const cors = require('cors')
 const { MongoDBurl } = require('./config');

const bookRouter = require('./routes/bookRouter');
 
//declaration

const app =express();

//middleware

app.use(bodyParser.json());
app.use(morgan('tiny'));
app.use(cors(
        // {
        //         origin:"http://localhost:3000",
        //         methods:["GET","POST","PUT","DELETE"],
        //         allowedHeaders:['Content-Type']
        // }
))


 // mongoDburl
 mongoose
    .connect(MongoDBurl)
    .then (()=>{
            console.log("Database is connected");
           
    })
    .catch((error)=>{
            console.error(error);
    });


app.get("/",(req,res)=>{

     return res.status(234).send("Welocme to MERN Stack Project ")
})

// routes

app.use('/books',bookRouter);


module.exports = app;