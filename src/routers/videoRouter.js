import express from "express";
import { see, edit, upload, deleteVid } from "../controllers/videoController";


const videoRouter = express.Router();

videoRouter.get("/upload", upload);
videoRouter.get("/:id", see);
videoRouter.get("/:id/edit", edit);
videoRouter.get("/:id/delete", deleteVid);

export default videoRouter;