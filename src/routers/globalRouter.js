import express from "express";
import { join } from "../controllers/userController";   // { 같은이름으로넣어야. }
import { trending } from "../controllers/videoController";

const globalRouter = express.Router();


globalRouter.get("/", trending);
globalRouter.get("/join", join);

export default globalRouter; // export default -> import ANYNAMEYOUWANT!!