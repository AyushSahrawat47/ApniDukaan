const express = require('express');
const router = express.Router();
const CartItem = require('../models/Cart')
const Product = require('../models/Product')


router.post('/add-to-cart/:id', async(req,res)=>{
    const id = req.params.id;
    try{
        const isProduct = await Product.findById(id);
        if(!isProduct) return res.status(404).json({message: "Product not found"});
        const {name, price, imageUrl} = isProduct;
        const cartItem = new CartItem({id, name, price, imageUrl})
        await cartItem.save();
        res.status(200).json("successfully added to cart")
    }catch(err){
        console.log(err.message)
        res.status(500).send("Internal Server Error")
    }
});

module.exports = router;
