// request - response => server 
//create a erver

let http = require("http"); // node modules=> http,fs,o
let fs = require("fs")  //file system dosyalar ile calisirken kullanilir
let server = http.createServer((req,res) => {
    
    if(req.url == "/"){
        fs.readFile("index.html", (err,html)=> {
            res.write(html);
            res.end();
        });
        
    }else if(req.url == "/product"){
         
        fs.readFile("product.html", (err,html)=> {
            res.write(html);
            res.end();
        })

    }else {
        
        fs.readFile("404.html", (err,html)=> {
            res.write(html);
            res.end();
        })
    }
 });



 // Bu serveri bir port altinda hizmete acmamiz gerekiyor bunu icin 300 portu olusturuyoruz

 server.listen(3000,()=> {
    console.log("node.js server 3000 portunda calisti")
 }); 