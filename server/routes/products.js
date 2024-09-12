const express = require('express');
const router = express.Router();
const Product = require('../models/Product')

router.get('/new-product', async (req, res)=>{
    const {pid, name, description, imageUrl, price, category } = req.body;
    
    try{
        //validate inputs
        if(!pid || !name || !description || ! imageUrl || !price){
            return res.status(400).json({message: "please enter all the details !!"})
        }

        //Add new product
        const newProduct = new Product({pid, name, description, imageUrl, price, category});

        //save Product to the database
        await newProduct.save();
        //Respond success
        res.status(201).json(newProduct);
    }catch(err){
        res.status(500).json({message:err.message})
    }
});

// update existing product 
router.put('update/:id', async (req, res) => {
    const id = req.params.id;
    const {name, description, imageUrl, price, category} = req.body;
    try{
        const isProduct = await Product.findById(id);
        if(!isProduct){
            res.status(404).json("product not found !!")
        }
        const updatedProduct = await Product.findByIdAndUpdate(id, {name, description, imageUrl, price, category});
        res.status(200).json("Product Details Updated !!");
    }
    catch(err){
        res.status(500).json({message:err.mesage})
    };
});

//fetch all products
router.get('/all-products', async (req, res) => {
    try{
        const products = await Product.find();
        if(!products){
            res.status(404).json("No products found !!")
        }
        res.send(products);
    }
    catch(err){
        res.status(500).json({message:err.message})
    };
})

//fetch specific products using product id
router.get('/:id', async (req, res) => {
    try{
        const id  = req.params.id;
        const isProduct = await Product.findById(id);
        if(isProduct){
            res.json(isProduct);
        }
        else{
            res.status(404).json("Product not found !!")
        }
    }
    catch(err){
        res.status(500).json({message:err.message})
    }
})


module.exports = router;