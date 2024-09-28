const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');


// create new user
router.post('/new-user', async (req, res) => {
    const {name, email, password} = req.body;
    try{
        if(!name || !email || !password){
            return res.status(400).json({message:"Please enter all the details!!"})
        }

        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        const newUser = new User({name, email, password: hashedPassword});
        await newUser.save();

        res.status(201).json(newUser)
    }
    catch(err){
        res.status(500).json({message:err.message})
    }
});

//login existing user
router.post('/login', async (req, res) => {
    const {email, password} = req.body;
    try{
        const user = await User.findOne({email});
        if(!user){
            return res.status(404).json("Please Check the credentials!!")
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch){
            res.status(200).json({message:"Login Successful"})
        }
    }
    catch(err){
        res.status(500).json({message:err.message})
    }
})

module.exports = router;