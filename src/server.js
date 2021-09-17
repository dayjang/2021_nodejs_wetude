import express from 'express';
const PORT = 4000; 

const app = express();

const handleHome = (req, res) => {
    return res.send("I Still Love YOU!");
};                      // const handleHome = () => console.log("SB is trying to go home");
const handleLogin = (req,res) => {
    return res.send("Login Here.");
};
const handleListening = () => 
    console.log(`Server is Listening on port http//localhost:${PORT}. ❤️‍🔥❤️‍🩹❣️💕💞💝`);

app.get("/", handleHome);
app.get("/login", handleLogin);
app.listen(PORT, handleListening); 

