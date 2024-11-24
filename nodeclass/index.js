const fs = require('fs');

// let file= fs.writeFileSync('mytext.txt',"klmlkmfjlnweklnebwlgamenblwkeam");
// console.log(file);
let data= fs.readFileSync('mytext.txt','utf8');
console.log(data);
if(fs.existsSync('mytex.txt')){
    console.log('AVAILABLE');
    
}
else{
    console.log("not available");
    
}
// fs.watch('./mytext.txt',(evtp,filen)=>console.log(`file ${evtp} and ${filen}`))

fs.appendFileSync('mytext.txt',"\nvnjkckddd  sk lknfwls vwkngedvs",'utf8');
fs.copyFileSync('mytext.txt',"mytext2.txt");
 
console.log(fs.readdirSync('.'))
// fs.unlinkSync('mytext2.txt');
fs.renameSync("mytext2.txt","newtext2.txt");

