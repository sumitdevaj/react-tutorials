const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    name:{type: String},
    description:{type:String},
    title:{type:String},
    brand:{type:String},
    rating:{type:String},
    img:{type:String},
    price:{type:Number},
   discount:{type:Number}, 
   stock:{type:Number},
   catgory:{type:String},
    createdAt:{type: Date,defaultValue:new Date()},

})

module.exports = mongoose.model('product',productSchema);
