const express=require('express');
const app=express();
const {connectDB}=require("./config/db");
const {userRoutes}=require('./routes/userRoutes.js') ;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
let port=3000;
connectDB();
app.get("/",(req,res)=>{
    res.send("hello");
}); 


app.listen(port,()=>{
    console.log(`server is listening on port ${port}`);
});