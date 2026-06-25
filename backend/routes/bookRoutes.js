import express from 'express';
import { addbook,listBook,removeBook } from '../controllers/bookController.js'
import multer from "multer";

const bookRouter=express.Router();
const upload=multer({storage:multer.memoryStorage()});

bookRouter.post('/add', upload.single('image'),addbook);
bookRouter.get("/list",listBook);
bookRouter.post("/remove",removeBook);

export  {bookRouter};