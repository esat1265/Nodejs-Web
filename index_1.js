const express = require("express");
const app = express();
const userRoutes = require("./routes/users")

app.set("view engine","ejs");

app.use(express.static('public')); 
app.use(express.static('node_modules')); 

app.use(userRoutes);
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



app.listen(3000, () => {
    console.log("Listening on port 3000")
}); 