import express from 'express';
import multer from "multer";
import authMiddleware from '../middleware/auth.js';
import {addEvent,removeEvent,listEvent} from "../controllers/eventController.js";


export const eventRouter=express.Router();
const upload=multer({storage:multer.memoryStorage()});

eventRouter.post("/add",authMiddleware,upload.single('image'),addEvent);
eventRouter.get("/list",listEvent);
eventRouter.post("/remove",authMiddleware,removeEvent);
