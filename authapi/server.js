const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
require('dotenv').config();
const app = express();
const port = 3000;
app.use(bodyParser.json());
const users = [];

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
app.post('/signup', async (req, res) => {
    try {
        const { userName, password } = req.body;
        if (users.find(user => user.userName === userName)) {
            return res.status(400).json({
                message: "user already exists",
            })
        }
        let hashedPassword= await bcrypt.hash(password,10)
        console.log(hashedPassword);
        
        users.push({ userName, password:hashedPassword });
        res.status(201).json({ message: "user registered successfully" })
    }
    catch (err) {
        res.status(500).json({ message: "Error while creating user" })
    }

})
app.get('/users',auth,(req,res)=>{
    res.status(200).json({data:users})
})
app.get('/login',async(req,res)=>{
    try{
    let {userName,password}= req.query;
    console.log({userName,password});
    
    let user =users.find(user => user.userName === userName);
    if(! user){
        res.status(403).json({message: "User not found"})
    }
    const validPassword = await bcrypt.compare(password,user.password)
    if(!validPassword){
        res.status(400).json({message: "incorrect password"})
    }
    const token = jwt.sign({userName:user.userName,password:user.password},jwt_secret,{expiresIn:'1h'});
        res.status(200).json({message:"login successful",token})
    
    }
    catch(err){
        console.log(err);
        res.status(500).json({message:"login failed"})
    }
    
})



app.listen(port,()=>{
    console.log("listening on port",port);
})