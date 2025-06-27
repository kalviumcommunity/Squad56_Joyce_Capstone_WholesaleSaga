const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectToDB = require('./config/db'); 
const authRoutes = require('./routes/auth');
const {CatModel, CatMutton, CatParty, CatOffer, CatSeafood, CatReady, CatSnack, CatCold,CatEgg, CatPickel, CatSpice, CatDryfish, SignUpModel } = require('./models/user');
require('dotenv').config();

const port = process.env.PUBLIC_PORT || 3000;
const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json()); 
app.use('/auth', authRoutes);

app.get('/', (req, res) => {
    res.send("Welcome to Joyce's capstone");
});

app.get('/getCat', async (req, res) => {
    try {
        let data = await CatModel.find({});
        if (data.length === 0) {
            return res.status(404).send({ error: 'No data found' });
        }
        res.send(data);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).send({ error: 'Internal server error' });
    }
});

app.get("/getMut", async (req, res) => {
    try {
        let data = await CatMutton.find({});
        if (data.length === 0) {
            return res.status(404).send({ error: 'No data found' });
        }
        res.send(data);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).send({ error: 'Internal server error' });
    }
});

app.get("/getParty", async (req, res) => {
    try {
        let data = await CatParty.find({});
        if (data.length === 0) {
            return res.status(404).send({ error: 'No data found' });
        }
        res.send(data);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).send({ error: 'Internal server error' });
    }
});

app.get("/getOffer", async (req, res) => {
    try {
        let data = await CatOffer.find({});
        if (data.length === 0) {
            return res.status(404).send({ error: 'No data found' });
        }
        res.send(data);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).send({ error: 'Internal server error' });
    }
});

app.get("/getSeafood", async (req, res) => {
    try {
        let data = await CatSeafood.find({});
        if (data.length === 0) {
            return res.status(404).send({ error: 'No data found' });
        }
        res.send(data);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).send({ error: 'Internal server error' });
    }
});

app.get("/getReady", async (req, res) => {
    try {
        let data = await CatReady.find({});
        if (data.length === 0) {
            return res.status(404).send({ error: 'No data found' });
        }
        res.send(data);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).send({ error: 'Internal server error' });
    }
});

app.get("/getSnack", async (req, res) => {
    try {
        let data = await CatSnack.find({});
        if (data.length === 0) {
            return res.status(404).send({ error: 'No data found' });
        }
        res.send(data);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).send({ error: 'Internal server error' });
    }
});

app.get("/getCold", async (req, res) => {
    try {
        let data = await CatCold.find({});
        if (data.length === 0) {
            return res.status(404).send({ error: 'No data found' });
        }
        res.send(data);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).send({ error: 'Internal server error' });
    }
});

app.get("/getEgg", async (req, res) => {
    try {
        let data = await CatEgg.find({});
        if (data.length === 0) {
            return res.status(404).send({ error: 'No data found' });
        }
        res.send(data);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).send({ error: 'Internal server error' });
    }
});

app.get("/getPickel", async (req, res) => {
    try {
        let data = await CatPickel.find({});
        if (data.length === 0) {
            return res.status(404).send({ error: 'No data found' });
        }
        res.send(data);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).send({ error: 'Internal server error' });
    }
});

app.get("/getSpice", async (req, res) => {
    try {
        let data = await CatSpice.find({});
        if (data.length === 0) {
            return res.status(404).send({ error: 'No data found' });
        }
        res.send(data);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).send({ error: 'Internal server error' });
    }
});

app.get("/getDryfish", async (req, res) => {
    try {
        let data = await CatDryfish.find({});
        if (data.length === 0) {
            return res.status(404).send({ error: 'No data found' });
        }
        res.send(data);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).send({ error: 'Internal server error' });
    }
});

app.post('/signup', async (req, res) => {
  try {
      const { username, password, mobileNo } = req.body;

      const newUser = new SignUpModel({ username, password, mobileNo });
      await newUser.save();

      res.status(201).send({ message: 'User created successfully' });
  } catch (error) {
      console.error('Error creating user:', error);
      res.status(500).send({ error: 'Internal server error' });
  }
});

app.post('/api/auth/login', async (req, res) => {
    const { username, mobile } = req.body;
    if (username && mobile) {
      res.status(200).json({ message: 'Login successful' });
    } else {
      res.status(400).json({ error: 'Invalid credentials' });
    }
  });
  

connectToDB();

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
