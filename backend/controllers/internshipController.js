import InternshipModel from "../model/InternshipModel.js";
import cloudinary from "../config/cloudinaryConfig.js";
import { Readable } from "stream";

const uploadToCloudinary = (buffer) => {
  return new Promise((resolve, reject) => {
    const readable = new Readable();
    readable.push(buffer);
    readable.push(null);

    const stream = cloudinary.uploader.upload_stream(
      { folder: "internship_sell", resource_type: "image" },
      (error, result) => {
        if (error) reject(error);
        else resolve(result);
      }
    );
    readable.pipe(stream);
  });
};

//add internship
const addInternship =  async(req,res) => {
    try{
        if (!req.file) {
      return res.status(400).json({ success: false, message: "Image file is required" });
    }
    const ownerId = req.user?.id || req.userId || req.body?.userId;
    if (!ownerId) {
      return res.status(401).json({ success: false, message: "not authorized login first" });
    }
    const uploadResult = await uploadToCloudinary(req.file.buffer);
        const internship = new InternshipModel({
          image: uploadResult.secure_url,
          imagePublicId: uploadResult.public_id,
          link:req.body.link,
          owner: ownerId
        });
        await internship.save();
        res.json({ success: true, message: "Internship added" });
    }catch(err){
        console.log(err);
        res.json({success:false,message:"internship is not added"});
    }
};

//list all internship
const listInternship=async(req,res)=>{
    try {
        const Internship=await InternshipModel.find({});
        res.json({ success: true, data:Internship });
    } catch (error) {
         console.log(error);
        res.json({success:false,message:"something is not good"});
    }
}

//remove internship
const removeInternship=async(req,res)=>{
    try {
        const internship=await InternshipModel.findById(req.body.id);
        if(!internship){
            return res.status(404).json({ success: false, message: "Internship is not found" });
        }
        if (internship?.imagePublicId) {
              await cloudinary.uploader.destroy(internship.imagePublicId);
        }  
        await InternshipModel.findByIdAndDelete(req.body.id);
        res.json({ success: true, message: "removed" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "not removed successfully" });
    }
}

export {addInternship,listInternship,removeInternship};