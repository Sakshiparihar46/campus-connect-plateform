import mongoose from "mongoose";

const InternshipSchema=mongoose.Schema({
    image:{
        type:String,
        required:true
    },
    link:{
        type:String,
        required:true
    },
    owner:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true
    }
});

const InternshipModel=mongoose.model("Internship",InternshipSchema);
export default InternshipModel;