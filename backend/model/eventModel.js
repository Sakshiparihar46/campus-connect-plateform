import mongoose from "mongoose";

const EventSchema=mongoose.Schema({
    image:{
        type:String,
        required:true
    },
    link:{
        type:String,
        required:true
    },
    venue:{
        type:String,
        required:true
    },
    owner:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true
    }
});

const EventModel=mongoose.model("Internship",EventSchema);
export default EventModel;