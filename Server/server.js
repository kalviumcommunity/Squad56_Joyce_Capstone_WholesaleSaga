const express = require('express')
dotenv.config()
const port = process.env.PUBLIC_PORT || 3000;

const app = express();
//define a route
console.log('hello')
app.get('/',(req,res)=>{
    try{
        res.send("Welcome to Joyce's capstone");
    }
    catch(err){
        res.send(err)
    }
})

//start server
app.listen(process.env.PUBLIC_PORT,()=>{
    console.log(`Server is running on port ${process.env.PUBLIC_PORT}`);
})