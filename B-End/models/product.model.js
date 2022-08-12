const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    productSKU:Number,   
    name:{
        type:String, minLenght:3,maxlenght:20
    },
   avatar:String,
   price:Number,
});

module.exports = mongoose.model("Product",productSchema);