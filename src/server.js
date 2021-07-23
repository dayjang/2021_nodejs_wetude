import express from "express";
const PORT = 4000;            
const app = express();  

const logger = (req,res,next) => {
    console.log(`gossipMid: ${req.method} ${req.url}`);
    next(); 
}
const handleHome = (req,res) => {
    return res.send("handle home is executed! I LUV MIDDLEWARE");
};

const privateMiddleware = (req,res,next) => {
    const url = req.url;
    if (url ==="/protected") {
        return res.send("<h1>Not Allowed</h1>")
    }
    console.log("Allowed, You may continue....")
    next();
}

// handleProtected is a last fuction, so NO NEED NEXT
const handleProtected = (req,res) => {
    return res.send("Welcome to the private lounge.");
}
app.use(logger);
app.use(privateMiddleware);
app.get("/",handleHome);
app.get("/protected",handleProtected);
const handleListening = () => console.log(`server listeing thru http://localhost:${PORT}`);
app.listen(4000, handleListening); // open server to outside of the world. 
