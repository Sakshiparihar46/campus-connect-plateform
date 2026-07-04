import express from 'express';
import multer from "multer";
import authMiddleware from '../middleware/auth.js';
import {addInternship,removeInternship,listInternship} from "../controllers/internshipController.js";


const internshipRouter=express.Router();
const upload=multer({storage:multer.memoryStorage()});

internshipRouter.post("/add",authMiddleware,upload.single('image'),addInternship);
internshipRouter.get("/list",listInternship);
internshipRouter.post("/remove",authMiddleware,removeInternship);

export {internshipRouter};