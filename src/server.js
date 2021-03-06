import express from "express";
import morgan from "morgan";
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";



const PORT = 4000; 
const app = express();
const logger = morgan("dev");
console.log(process.cwd());
app.set("view engine", "pug");
app.set("views", process.cwd()+'/src/views');
app.use(logger);

app.use("/", globalRouter);
app.use("/videos", videoRouter);
app.use("/users",userRouter)

const handleListening = () =>  {
    console.log(`Server is Listening on port http//localhost:${PORT}. โค๏ธโ๐ฅโค๏ธโ๐ฉนโฃ๏ธ๐๐๐`);} 

app.listen(PORT, handleListening);