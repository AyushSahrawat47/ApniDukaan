const express = require('express');
const router = express.Router();
const Cart = require('../models/Cart')
const Product = require('../models/Product')

//add to cart
router.post('/add-to-cart/:id', async(req,res)=>{
    const id = req.params.id;
    try{
        const isProduct = await Product.findById(id);
        if(!isProduct) return res.status(404).json({message: "Product not found"});
        const {name, price, imageUrl} = isProduct;
        const cartItem = new Cart({id, name, price, imageUrl})
        await cartItem.save();
        res.status(200).json("successfully added to cart") 
    }catch(err){
        console.log(err.message)
        res.status(500).send("Internal Server Error")
    }
});

//remove from cart
router.delete('/remove-item/:id', async(req,res)=>{
    try{
        const id = req.params.id;
        const isPresent = Cart.findOne(id);
        if(!isPresent) return res.status(404).json({message: "Product not found"})
        await Cart.findOneAndDelete(id);
        res.status(200).json("successfully removed from cart")
    }
    catch(err){
        res.status(500).json({message:err.message})
    }
});

//fetch all items from cart
router.get('/all-items', async(req,res)=>{
    try{
        const cartItems = await Cart.find();
        res.json(cartItems);
    }
    catch(err){
        res.status(500).json({message:err.message})
    }
})

module.exports = router;
