const express = require('express');
const router = express.Router();
const CartItem = require('../models/cartModel')


router.post('/addToCart', async(req,res)=>{
    
    try{
        const {id, name, imageUrl, price} = req.body;
        
        const item = new CartItem({
            id, name, imageUrl, price
        })
        const addedItem = await item.save()
    
        res.json(addedItem)

    }catch(err){
        console.log(err.message)
        res.status(500).send("Internal Server Error")
    }
})






// ROUTE 1: Add a new Note using: POST "/api/notes/addnote". Login required
router.post('/addnote', async (req, res) => {
        try {
            const { title, description, tag } = req.body;

            // If there are errors, return Bad request and the errors
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }
            const note = new Note({
                title, description, tag, user: req.user.id
            })
            const savedNote = await note.save()

            res.json(savedNote)

        } catch (error) {
            console.error(error.message);
            res.status(500).send("Internal Server Error");
        }
    })