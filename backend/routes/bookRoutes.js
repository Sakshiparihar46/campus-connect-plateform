import express from 'express';
import { addbook,listBook,removeBook } from '../controllers/bookController.js'
import multer from "multer";
import authMiddleware from '../middleware/auth.js';

const bookRouter=express.Router();
const upload=multer({storage:multer.memoryStorage()});

bookRouter.post('/add',authMiddleware,upload.single('image'),addbook);
bookRouter.get("/list",authMiddleware,listBook);
bookRouter.post("/remove",authMiddleware,removeBook);

export  {bookRouter};