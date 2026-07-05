import express from 'express';
import multer from "multer";
import authMiddleware from '../middleware/auth.js';
import {addEvent,removeEvent,listEvent} from "../controllers/eventController.js";


export const EventRouter=express.Router();
const upload=multer({storage:multer.memoryStorage()});

EventRouter.post("/add",authMiddleware,upload.single('image'),addEvent);
EventRouter.get("/list",listEvent);
EventRouter.post("/remove",authMiddleware,removeEvent);
