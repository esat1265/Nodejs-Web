const express = require("express");
const app = express();

app.set("view engine","ejs");
app.use(express.static('public')); 
app.use(express.static('node_modules')); 

const data = [
    {id:1, name:"iphone 14", price:30000,isActive:true,isHome:true,imageUrl:"1.jpeg"},
    {id:2, name:"iphone 15", price:40000,isActive:false,isHome:false,imageUrl:"2.jpeg"},
    {id:3, name:"iphone 16", price:50000,isActive:true,isHome:true,imageUrl:"3.jpeg"},
]
/**
 * //routes with using express route
 * 
 app.use("/products/:id", function(req,res){
    res.send("products details" + req.params.id)
    res.send("products details")
});

app.use("/products", function(req,res){
    res.send("products")
});

app.use("/", function(req,res){
    res.send("anasayfa")
});
 *  
 */

// Now we are using ejs for render files

app.use("/products/:id", function(req,res){
    const urun = data.find(u => u.id == req.params.id)
    res.render("pro-details", urun) // ejs dosya ismi ile ayni olmali
    
}); 

app.use("/products", function(req,res){
    res.render("products", {
        urunler: data
    })  // ayrica sayfa disinda hazir bir dataya ekleyebiliriz
});

app.use("/", function(req,res){
    res.render("index",{
        urunler: data
    })
});



app.listen(3000, () => {
    console.log("Listening on port 3000")
}); 