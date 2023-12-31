import express from 'express';
// "type": "module"   ---->   Important to run express server inside api
// as default type is common.js so in that case you need to use require instead of import

import dotenv from 'dotenv';
dotenv.config();

import mongoose from 'mongoose';
mongoose.connect(process.env.MONGO).then(()=>{
        console.log("Connected to MongoDB");
    }).catch((err)=>{
        console.log(err);
});


// nodemon ---> don't need to start the server again for any update
// but not using it in production

const app = express();

app.listen(3000, ()=>{
    console.log("Server is running on PORT 3000,");
});