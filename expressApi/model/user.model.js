const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    name:{type: String, required: true,minLength:5, maxLength:20},
    email:{type:String, required: true},
    phone:{type:String},
    password:{type:String,required:true},
    createdAt:{type: Date,defaultValue:new Date()},

})

module.exports = mongoose.model('user',userSchema);
