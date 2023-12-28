const express  = require("express");
const route = require("./route/routes");
const { default: mongoose } = require("mongoose");
const app = express();




mongoose.connect("mongodb+srv://parthjohi009:E5ESleWwGGp0waa1@cluster0.k3a6ktn.mongodb.net/",{
    useNewUrlParser : true,
}).then(()=> console.log("mongodb is connected ")).catch((err)=> console.log("promise failed",err))

app.get("/",route)

app.listen(7000,()=>{
    console.log("port is connected")
})

// mongodb+srv://parthjohi009:E5ESleWwGGp0waa1@cluster0.k3a6ktn.mongodb.net/
// password = E5ESleWwGGp0waa1 ;
// user = parthjohi009 ;







