const express= require("express");
const app = express();
let PORT = 5000;

const sendMail = require("./controllers/sendMail")
app.get("/",(req,res)=>{
    res.send("I am a server");
});

app.get("/mail", sendMail);
const start=async ()=>{
    try{
        app.listen(5000,()=>{
            console.log(`i am live in port ${PORT}`);
        });
    }
    catch(error){
        console.log(error)

    };
}

start();