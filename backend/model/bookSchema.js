import mongoose from"mongoose";

const bookSchema=mongoose.Schema({
    book_name:{
        type:String,
        require:true
    },
    image:{
        url:String,
        require:true
    },
    description:{
        type:String,
        require:true
    },
    price:{
        type:Number,
        require:true
    },
    department_name:{
        type:String,
        require:true
    },
    contact_no:{
        type:Number,
        require:true  
    },
    email:{
        type:String,
        require:true
    },
    owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
    },
});
 const bookModel=mongoose.model("book",bookSchema);
 export default bookModel;