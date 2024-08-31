const mongoose = require('mongoose');
const { Schema } = mongoose;

const ProductSchema = new Schema({
    pid:{
        type:Number,
        required: true,
        unique: true,
    },
    name:{
        type: String,
        required: true
    },
    description:{
        type:String,
        required:true
    },
    imageUrl:{
        type: String,
        required: true, 
    },
    price:{
        type: Number,
        required: true,
    },
    category:{
        type: String,
        default: "General"
    },
  });

  module.exports = mongoose.model('Products', ProductSchema);