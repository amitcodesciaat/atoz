const express = require("express");
const app = express();
const bodyParser = require("body-Parser");



const mongoose = require("mongoose");


app.set ("view engine","ejs");
app.use (bodyParser.urlencoded({extended:true}));
app.use (express.static("public"));

mongoose.connect("mongodb://localhost:27017/testBlogDB");



app.get("/",(req,res)=> {
    res.render("home")

})


app.post((req,res)=>{
    res.redirect("/index.ejs")
})






app.listen(3000, (req,res)=>{
    console.log("server started on port :3000");
})