const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port =4000;

app.use(bodyParser.json());

let items= [];
let idCounter = 1;

app.get('/',(req,res)=>{
    res.send({
        status:true,
        message:"working fine ..."

    })

})

app.post('/item',(req,res)=>{
    const {name,description} = req.body;
    if(!name || !description){
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