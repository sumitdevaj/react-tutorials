const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const app = express();
const validator = require('validator');
const port =4000;

app.use(bodyParser.json());
let users = [];
let items= [];
let idCounter = 1;



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

app.post('/addProduct',adminAuth,(req,res)=>{
    const {name,description,img,price,stock,title} = req.body;
    if(!name || !description || !img || !price || !stock || !title){
        return res.send({status:false, message:"name and description must"})
    }
    const newItem = {id:idCounter++,name,description}
    items.push(newItem);
    res.status(200).send({status:true, data:newItem});
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
app.listen(port,()=>{
    console.log(`server listening on ${port}`);
    
})