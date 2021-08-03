import express from "express";

const userRouter = express.Router();
import { edit, remove } from "../controllers/userController";


userRouter.get("/edit", edit);
userRouter.get("/remove", remove);

export default userRouter;