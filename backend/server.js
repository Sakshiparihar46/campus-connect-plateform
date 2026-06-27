import express from 'express';
const app=express();
import {connectDB} from "./config/db.js";
import {userRouter} from './routes/userRoutes.js';
import {bookRouter} from "./routes/bookRoutes.js";
import cors from 'cors'


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
let port=3000;
connectDB();

app.use(cors({
  origin:[ "http://localhost:5174/"
  ], 
  credentials: true
}));
app.use("/api/user",userRouter);
app.use("/api/book",bookRouter);


app.get("/",(req,res)=>{
    res.send("hello");
}); 


app.listen(port,()=>{
    console.log(`server is listening on port ${port}`);
});