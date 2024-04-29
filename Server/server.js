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

  app.get('/getHome', async (req, res) => {
  try {
    let data = await HomeModel.find({});
    console.log(data);
    if (data.length === 0) {
      return res.status(404).send({ error: 'No data found' });
    }
    res.send(data);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).send({ error: 'Internal server error' });
  }
});

    
    connectToDB();

    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });




