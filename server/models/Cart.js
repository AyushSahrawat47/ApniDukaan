const mongoose = require('mongoose');
const { Schema } = mongoose;

const CartSchema = new Schema({
    id:{
        type:String,
        required: true,
        unique: true,
    },
    name:{
        type: String,
        required: true
    },
    imageUrl:{
        type: String,
        required: true, 
    },
    price:{
        type: Number,
        required: true,
    },
    tag:{
        type: String,
        default: "General"
    },
  });

  module.exports = mongoose.model('Cart', CartSchema);