import EventModel from "../model/eventModel.js";
import cloudinary from "../config/cloudinaryConfig.js";
import { Readable } from "stream";

const uploadToCloudinary = (buffer) => {
  return new Promise((resolve, reject) => {
    const readable = new Readable();
    readable.push(buffer);
    readable.push(null);

    const stream = cloudinary.uploader.upload_stream(
      { folder: "Event_sell", resource_type: "image" },
      (error, result) => {
        if (error) reject(error);
        else resolve(result);
      }
    );
    readable.pipe(stream);
  });
};

//add 
const addEvent =  async(req,res) => {
    try{
        if (!req.file) {
      return res.status(400).json({ success: false, message: "Image file is required" });
    }
    const ownerId = req.user?.id || req.userId || req.body?.userId;
    if (!ownerId) {
      return res.status(401).json({ success: false, message: "not authorized login first" });
    }
    const uploadResult = await uploadToCloudinary(req.file.buffer);
        const event = new EventModel({
          image: uploadResult.secure_url,
          imagePublicId: uploadResult.public_id,
          link:req.body.link,
          venue:req.body.venue,
          owner: ownerId
        });
        await event.save();
        res.json({ success: true, message: "event added" });
    }catch(err){
        console.log(err);
        res.json({success:false,message:"event is not added"});
    }
};

//list 
const listEvent=async(req,res)=>{
    try {
        const event=await eventModel.find({});
        res.json({ success: true, data:event });
    } catch (error) {
         console.log(error);
        res.json({success:false,message:"something is not good"});
    }
}

//remove 
const removeEvent=async(req,res)=>{
    try {
        const event=await EventModel.findById(req.body.id);
        if(!event){
            return res.status(404).json({ success: false, message: "event is not found" });
        }
        if (event?.imagePublicId) {
              await cloudinary.uploader.destroy(event.imagePublicId);
        }  
        await EventModel.findByIdAndDelete(req.body.id);
        res.json({ success: true, message: "removed" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "not removed successfully" });
    }
}

export {addEvent,removeEvent,listEvent};