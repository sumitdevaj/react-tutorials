const fs = require('fs');
const os = require('os');
const p = require('path');
const http = require('http');
const ejs = require('ejs');

const templatePath = './views/index.ejs'


// // let file= fs.writeFileSync('mytext.txt',"klmlkmfjlnweklnebwlgamenblwkeam");
// // console.log(file);
// let data= fs.readFileSync('mytext.txt','utf8');
// console.log(data);
// if(fs.existsSync('mytex.txt')){
//     console.log('AVAILABLE');
    
// }
// else{
//     console.log("not available");
    
// }
// // fs.watch('./mytext.txt',(evtp,filen)=>console.log(`file ${evtp} and ${filen}`))

// fs.appendFileSync('mytext.txt',"\nvnjkckddd  sk lknfwls vwkngedvs",'utf8');
// fs.copyFileSync('mytext.txt',"mytext2.txt");
 
// console.log(fs.readdirSync('.'))
// // fs.unlinkSync('mytext2.txt');
// fs.renameSync("mytext2.txt","newtext2.txt");

// fs.readFile("mytext.txt",'utf-8',(err,data)=>{
//     if(err){
//         console.log(err);
        
//     }
//     console.log(data);
    
// })
// fs.writeFile('mytext.txt'," hello class ",(err)=>{
//     if(err) throw err;
//     console.log("file successfully");
    
// })

// fs.appendFile('mytext.txt'," \nhello class added new text gkkfkfkgf \n ",(err)=>{
//     if(err) throw err;
//     console.log("file successfully");
    
// })
// fs.rename('mytext.txt', 'newmytext.txt',(err)=>{
//     if(err) throw err;
//     console.log("rename success");
// })

// fs.unlink('newmytext.txt',(err)=>{
//     if(err) throw err;
//     console.log('file delted successfully');
    
// });

// fs.mkdir('nwDir',(err)=>{
//     if(err) throw err;
//     console.log("created directory");
    
// })
// fs.rmdir('nwDir',(err)=>{
//     if(err) throw err;
//     console.log("rm directory");
    
// })
// fs.readdir('../check',(err,files)=>{
//     if(err) throw err;
//     console.log(files);

//     fs.readFile(`../${files[0]}`,'utf-8',(err,data)=>{
//         if(err) throw err;
//         console.log(data);
        
//     })
    
// })

// console.log(os.platform())
// console.log(os.arch());
// console.log(os.type());
// console.log(os.release());
// console.log(os.uptime());
// let mem= os.totalmem()
// console.log(mem/ (1024*1024*1024));
// console.log(os.freemem() / (1024*1024*1024));
// console.log(os.networkInterfaces());
// console.log(os.tmpdir());
// console.log(os.cpus());
// console.log(os.machine());
// console.log(p.basename('./nodeclass/index.js'));
// console.log(p.dirname('./nodeclass/index.js'));
// console.log(p.extname('./nodeclass/index.js'));
// console.log(p.join('./nodeclass','new1','new2','new3'));
// let folder= p.resolve('./',"addedfile.txt")
// fs.writeFile(folder,'kdnlenkflkks',(err)=>{
//     if(err) throw err;
//     console.log('added file');
    
// })

// console.log(p.join(__dirname,'../first.html'))
let htmlFile = p.join(__dirname,'../first.html')
console.log(__dirname,"fjnkj");

const server = http.createServer((req,res)=>{
    const url = req.url;
    console.log(url ,"qquhuq");
    
    if(url === "/about"){
    fs.readFile(htmlFile,(err,content)=>{
        if(err){
            res.writeHead(500,{'Content-Type':'text/plain'});
            res.sendDate('500 internal server error')
        }
        else{
            res.writeHead(200,{'Content-Type':'text/html'});
            res.end(content)
        }
    })
}
    if(url === '/'){
        res.writeHead(200,{'Content-Type':'text/plain'});
        res.end('welcome to the home page')
    }
    if(url === '/dynamic'){
        fs.readFile(templatePath, 'utf8', (err,data)=>{
            if(err){
                res.writeHead(500,{'Content-Type': 'text/plain'});
                res.end("error in loading template")
            }
            const renderHtml =ejs.render(data,{title:"hello world",message:"hello piyush"})
            res.writeHead(200,{'Content-Type':'text/html'})
            res.end(renderHtml)

        })
    }
    
    
})
const port = 4222;
server.listen(port,()=>{
    console.log('server listening on port',port);
    
});


