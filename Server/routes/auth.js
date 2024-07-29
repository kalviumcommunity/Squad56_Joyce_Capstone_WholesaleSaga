const express = require('express');
const router = express.Router();
const { SignUpModel } = require('../models/user'); // Adjust the path as needed

router.post('/signup', async (req, res) => {
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

router.post('/login', async (req, res) => {
    try {
        const { username, mobileNo } = req.body;
        const user = await SignUpModel.findOne({ username, mobileNo });
        if (!user) {
            return res.status(401).send({ error: 'Invalid username or mobile number' });
        }
        res.status(200).send({ message: 'Login successful' });
    } catch (error) {
        console.error('Error logging in user:', error);
        res.status(500).send({ error: 'Internal server error' });
    }
});

module.exports = router;
