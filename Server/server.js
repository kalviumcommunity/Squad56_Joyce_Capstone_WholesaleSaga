const express = require('express');
const cors = require('cors');
const connectToDB = require('../Server/config/db'); 
const {CatModel, CatMutton, CatParty} =require("../Server/models/user")
require('dotenv').config();

const port = process.env.PUBLIC_PORT || 3000;
const app = express();

app.use(cors())
app.use(express.json()); 


app.get('/', (req, res) => {
    res.send("Welcome to Joyce's capstone");
  });

// I am raising a pr for my "GET API used" which is a redoassingment as my previous get request was very basic and this is the git api i did for this assingment.

//   app.get('/getHome', async (req, res) => {
//   try {
//     let data = await HomeModel.find({});
//     if (data.length === 0) {
//       return res.status(404).send({ error: 'No data found' });
//     }
//     res.send(data);
//   } catch (error) {
//     console.error('Error fetching data:', error);
//     res.status(500).send({ error: 'Internal server error' });
//   }
// });

// I am raising a pr for my "Updated bruno/API templates in application repo" which is a redo assingment because PR didn't reflecting the API end points


  app.get('/getCat',async(req,res)=>{
    try{
      let data=await CatModel.find({});
      if (data.length===0){
        return res.status(404).send({ error: 'No data found' });
      }
      res.send(data);
    }catch(error){
      console.error('Error fetching data:', error);
    res.status(500).send({ error: 'Internal server error' });
    }
  });


  app.get("/getMut",async(req,res)=>{
    try{
      let data=await CatMutton.find({});
      if(data.length===0){
        return res.status(404).send({ error: 'No data found' });
      }
      res.send(data);
    }catch(error){
      console.error('Error fetching data:', error);
      res.status(500).send({ error: 'Internal server error' });
    }
  });

  app.get("/getParty",async(req,res)=>{
    try{
      let data=await CatParty.find({});
      if(data.length===0){
        return res.status(404).send({ error: 'No data found' });
      }
      res.send(data);
    }catch(error){
      console.error('Error fetching data:', error);
      res.status(500).send({ error: 'Internal server error' });
    }
  });

    connectToDB();
// I am raising a pr for my "Database read and write performed" which is a redo assingment as I got a review that "The PR does NOT fully meet the purpose as it only partially implements the required database call in the API route."
    app.listen(port, () => {
      console.log(`⁠Server is running on port ${port}`);
    });