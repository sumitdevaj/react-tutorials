const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    name:{type: String, required: true},
    description:{type:String, required: true},
    title:{type:String, required: true},
    brand:{type:String, required: true},
    rating:{type:String, required: true},
    img:{type:String, required: true},
    price:{type:Number, required: true},
   discount:{type:Number, required: true}, 
   stock:{type:Number, required: true},
   catgory:{type:String},
    createdAt:{type: Date,defaultValue:new Date()},

})

module.exports = mongoose.model('product',productSchema);
