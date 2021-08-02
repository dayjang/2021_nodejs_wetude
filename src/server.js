import express from "express";
import morgan from "morgan";

const PORT = 4000;            
const app = express();  

const logger = morgan("short");//morgan("dev");



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


// => arrow function은 return을 포함한다
// 그래서 const handleHome = (req, res) => res.end() 충분
// const handleHome = (req, res) => {
// return res.end()
// }
// 이것과 동일함

 // app.get(router,controller 펑션을 사용)
// console.log("hi") this is not a function, it is a statement
// () => console.log("hi") this is a function! 
 // two argument needs- reqest, and response
 // BEAUTIFUL TWO CODE LINES BELOW :-)
 // const home = (req,res) => res.sent("hello");
 // app.get("/", home) ; 


 // app.use(A,B) 가 app.get(router,C) 위에 있으면, A,B가 middleware 처럼 밑에 router 에 적용됨!! A-B-C 