import express from "express";
import morgan from "morgan";

const PORT = 4000;            
const app = express();  
const logger = morgan("dev");      //morgan("dev"); morgan call next()
app.use(logger);

const globalRouter = express.Router();

const handleHome = (req, res)  => res.send("Home");

globalRouter.get("/", handleHome);

const userRouter = express.Router();

const handleEdituser = (req, res)  => res.send("Edit User");

userRouter.get("/edit", handleEdituser);

const videoRouter = express.Router();

const handleWatchVideo =  (req, res)  => res.send("Watch Video");

videoRouter.get("/watch", handleWatchVideo);


app.use("/",globalRouter);
app.use("/videos",videoRouter); 
// start with videos url,,, it will enter videoRouter... then we have "/watch"
app.use("/users",userRouter);




const handleListening = () => console.log(`😍 server listeing thru http://localhost:${PORT} 😎`);
app.listen(4000, handleListening); // open server to outside of the world. 

