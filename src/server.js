import express from "express";
const PORT = 4000;            
const app = express(); // 

const handleHome = (req,res) => {
    return res.send("I still love You@");
};

// app.get("/",()=>console.log("sb is trying to go home")); // we are receiving a request. but not responding haha
app.get("/",handleHome);

const handleListening = () => console.log(`server listeing thru http://localhost:${PORT}`);
app.listen(4000, handleListening); // open server to outside of the world. 
