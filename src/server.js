import express from "express";
const PORT = 4000;            
const app = express();  
const gossipMiddleware = (req,res,next) => {
    console.log(`I'm in the middle! Someone is going to: ${req.url}`);
    next(); // this gossipMid function call next(), and gossipnMid function become a middleware!!
}
const handleHome = (req,res) => {
    return res.send("handle home is executed!");
};
// we have two handlers and one of them is middleware
// middleware == handler -- controller... has one more argument 'next'
// app.get("/",()=>console.log("sb is trying to go home")); // we are receiving a request. but not responding haha

app.get("/",gossipMiddleware,handleHome);

const handleListening = () => console.log(`server listeing thru http://localhost:${PORT}`);
app.listen(4000, handleListening); // open server to outside of the world. 
