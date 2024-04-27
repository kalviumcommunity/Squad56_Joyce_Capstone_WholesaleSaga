const express = require('express');
const connectToDB = require('../Server/config/db'); 
const {HomeModel} =require("../Server/models/user")
require('dotenv').config();

const port = process.env.PUBLIC_PORT || 3000;
const app = express();


app.use(express.json()); 


app.get('/', (req, res) => {
    res.send("Welcome to Joyce's capstone");
  });

  app.get('/getHome', async(req, res) => {
    try {
        let data = await HomeModel.find()
        console.log(data)
        res.send(data)
      } catch (error) {
          res.send(error) 
      }
      
  });
    
    connectToDB();

    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });




