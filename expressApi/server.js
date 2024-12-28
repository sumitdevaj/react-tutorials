const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const app = express();
const validator = require('validator');
const multer = require('multer');
const cloudinary = require('cloudinary').v2;
const nodemailer = require('nodemailer');
const twilio = require('twilio');
const port =4000;
require('dotenv').config()
console.log(process.env.HELLO);
const Product = require("./model/product.model")

const accountSid = 'AC35e18f33978a1a53723b5c8b6e58dccb';
const authToken = '244e2846922729add71756793aeb0e56';
const client = twilio(accountSid, authToken);

const mongoose = require('mongoose');

const connectDb = async ()=>{
    try{
        await mongoose.connect('mongodb+srv://preetam:preetam@cluster0.wg3g3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',{
            useNewUrlParser:true
        })
        console.log(`mongo db connected successfully`);
        

    }
    catch(err){
        console.log(err);
        
    }
}
connectDb()





let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465, // Use port 465 for SSL
    secure: true, // Use SSL
    auth: {
        user: 'preetam@dice-academy.com',
        pass: ''
    }
});



cloudinary.config({
    cloud_name: 'dzw8ygh5x',
    api_key: 496711411842363,
    api_secret: 'm-GvvCDAQbxjaegq2Vm0rNWyDrE'
  });
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
let users = [];
let items= [];
let idCounter = 1;

const storage = multer.memoryStorage();
const upload = multer({ storage: storage }).single('file');


const jwt_secret ="fekdsnjsnvrkjesnbkjadbnejkwdbjkadkjadjksdk";

const auth = (req, res, next) => {
    let token = req.headers['authorization'];
    token = token.split(' ')[1]
    console.log(token);
    
    
    if (!token) return res.status(403).json({ message: "token is required for using the resource" });
    jwt.verify(token, jwt_secret, (err, user) => {
        if (err) return res.status(403).json({ message: "invalid token" });
        req.user = user;
        next();
    })
}

const adminAuth = (req, res, next) => {
    let token = req.headers['authorization'];
    token = token.split(' ')[1]
    console.log(token);

    
    if (!token) return res.status(403).json({ message: "token is required for using the resource" });
    jwt.verify(token, jwt_secret, (err, user) => {
        if (err) return res.status(403).json({ message: "invalid token" });
       
        req.user = user;
        if(user.role !== 'ADMIN'){
            res.status(403).json({ message: "you are not admin bro " });
        }
        next();
    })
}

app.post('/upload', upload, async (req, res) => {
    try {
      console.log('Form Data:', req.body,req.body?.file);  // Logs non-file form data (from Body-parser)
      console.log('Uploaded File:', req.file);  // Logs the file data (from Multer)
  
      // Example: req.body.title would be available if you sent a 'title' field in your form
      const title = req.body.title;
  
      if (!req.file) {
        return res.status(400).send('No file uploaded.');
      }
  
      // Upload the file to Cloudinary
      const result =await new Promise((resolve, reject) => {
        const uploadStream = cloudinary.uploader.upload_stream(
          { resource_type: 'auto' },
          (error, result) => {
            if (error) {
              reject(error);
            } else {
              resolve(result);
            }
          }
        );
        uploadStream.end(req.file.buffer);  // Pass the file buffer to Cloudinary
      });
      let dd = await result
      console.log(dd,"ssssssssss");
      
      // Send the response once the file is uploaded
      res.json({
        message: 'File uploaded successfully',
        title: title,
        imageUrl: dd
      });
  
    } catch (error) {
      // Catch and handle any errors
      console.error(error);
      res.status(500).send('Error uploading file: ' + error.message);
    }
  });

app.post('/send-message',async(req,res)=>{
    const {to = '9899580400', message} = req.body;
    if(!message){
        res.send("please enter a message");
    }
    try{
        const response = await client.messages.create({
            from:'whatsapp:+919899580400',
            to:`whatsapp:+919599580400`,
            body:message
        })
        res.send(response)
    }
    catch(err){
        console.log(err);
        
        res.send(err)
    }

})
  
app.post('/signup', async (req, res) => {
    try {
        const { userName, email,password,mobile } = req.body;
        let role ='USER'
        if(!userName || !email || !password || !mobile || !role) {
            res.status(400).json({ message: "please provide details to signup"})
        }
        let isEamil = validator.isEamil(email);
        if(!isEamil) {
            res.status(400).json({message:"please enter a valid email address"})
        }
        if (users.find(user => user.mobile === mobile)) {
            return res.status(400).json({
                message: "user already exists",
            })
        }
        let isStrongPassword = validator.isStrongPassword(password);
        if(!isStrongPassword) {
            res.status(400).json({message:"please enter format strong password "})
        }

        let hashedPassword= await bcrypt.hash(password,10)
        console.log(hashedPassword);
        
        users.push({ userName, password:hashedPassword ,email,role,mobile});
        res.status(201).json({ message: "user registered successfully" })
    }
    catch (err) {
        res.status(500).json({ message: "Error while creating user" })
    }

})
app.post('/admin/signup', async(req,res)=>{
    try {
        const { userName, email,password,mobile } = req.body;
        let role ='ADMIN';
        if(!userName || !email || !password || !mobile ) {
            res.status(400).json({ message: "please provide details to signup"})
        }
        let isEamil = validator.isEmail(email);
        if(!isEamil) {
            res.status(400).json({message:"please enter a valid email address"})
        }
        if (users.find(user => user.mobile === mobile)) {
            return res.status(400).json({
                message: "user already exists",
            })
        }
        let isStrongPassword = validator.isStrongPassword(password);
        if(!isStrongPassword) {
           return res.status(400).json({message:"please enter format strong password "})
        }

        let hashedPassword= await bcrypt.hash(password,10)
        console.log(hashedPassword);
        
        users.push({ userName, password:hashedPassword ,email,role,mobile});
        return res.status(201).json({ message: "user registered successfully" })
    }
    catch (err) {
        console.log(err);
        
        res.status(500).json({ message: "Error while creating user" })
    }
})
app.get('/users',auth,(req,res)=>{
    res.status(200).json({data:users})
})
app.get('/login',async(req,res)=>{
    try{
    let {mobile,password}= req.query;
    console.log({mobile,password});
    
    let user =users.find(user => user.mobile === mobile);
    if(! user){
       return res.status(403).json({message: "User not found"})
    }
    const validPassword = await bcrypt.compare(password,user.password)
    if(!validPassword){
       return res.status(400).json({message: "incorrect password"})
    }
    const token = jwt.sign({userName:user.userName,role:user.role,mobile:user.mobile},jwt_secret,{expiresIn:'1h'});
       return res.status(200).json({message:"login successful",token})
    
    }
    catch(err){
        console.log(err);
        res.status(500).json({message:"login failed"})
    }
    
})



app.get('/',(req,res)=>{
    res.send({
        status:true,
        message:"working fine ..."

    })

})

app.post('/addProduct',async(req,res)=>{
    const {name,title,description,brand,rating,img,price,discount,stock,category} = req.body;

    let data = new Product({name,title,description,brand,rating,img,price,discount,stock,category})
    await data.save()
    // if(!name || !description || !img || !price || !stock || !title){
    //     return res.send({status:false, message:"name and description must"})
    // }
    res.send({status:true, message:"done"})
    // const newItem = {id:idCounter++,name,description}
    // items.push(newItem);
    // res.status(200).send({status:true, data:newItem});
})

app.get('/item',(req,res)=>{
    res.send({
        status:true,
        data:items
    })
})
app.put('/item/:id',(req,res)=>{
    let {id}= req.params;
    console.log(id,"dddd");
    
    let {name,description} = req.body;
    console.log({name,description});
    
    let item = items.find(item => item.id == id)
    if(name) item.name = name;
    if(description) item.description = description;
    res.status(200).json({status:true, data:item});
})
app.get('/itemDelete',(req,res)=>{
    let {id} =req.query;
    let item = items.find(item => item.id == id);
    let newData= items.filter(iitem => iitem.id != item.id);
    console.log(newData);
    res.json({status:true, mesage:'item deleted'})
    
})

app.post('/sendEmail',async (req, res) => {
    try{
        let mailOptions = {
            from: 'preetam@dice-academy.com',
            to: req.body.email,
            subject: 'new customer added/enqiure',
            text: 'welcome to our website',
            html: '<p>Hello, this is a <strong>test email</strong> from Node.js using Nodemailer and Gmail.</p>'
          };
          transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
              return console.log('Error occurred:', error);
            }
            console.log('Message sent: %s', info.messageId);
          });

    }
    catch(err){

    }
})
app.listen(port,()=>{
    console.log(`server listening on ${port}`);
    
})