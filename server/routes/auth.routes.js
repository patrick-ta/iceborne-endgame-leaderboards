const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const userModel = require('../models/user.model');

const router = express.Router();

router.post('/signup', async (req, res) => {
    try {
        const { username, password } = req.body;
        const userId = await userModel.createUser(username, password);
        res.status(201).send({ id: userId });
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: 'Error signing up' });
    }
});

router.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;
        console.log(username, password);
        const user = await userModel.findUserByUsername(username);

        console.log(user);
        
        if (!user || !bcrypt.compareSync(password, user.password)) {
            return res.status(401).send({ message: 'Invalid credentials' });
        }
    
        const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, {
            expiresIn: 86400, // 24 hours
        });
        
        res.cookie('token', token, { httpOnly: true }); // Set secure: true for HTTPS
        res.send('Logged in');

        //res.status(200).send({ auth: true, token });
    } catch (error) {
        res.status(500).send({ message: 'Error logging in' });
    }
});

router.post('/logout', (req, res) => {
    res.cookie('token', '', { httpOnly: true, expires: new Date(0) });
    res.send('Logged out');
})

module.exports = router;