const express=require('express');
const app=express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
let port=3000;

app.get("/",(req,res)=>{
    req.send("hello");
}); 


app.listen(port,()=>{
    console.log(`server is listening on port ${port}`);
});