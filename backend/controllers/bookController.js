import bookModel from "../model/bookModel.js";
import cloudinary from "../config/cloudinaryConfig.js";
import { Readable } from "stream";


const uploadToCloudinary = (buffer) => {
  return new Promise((resolve, reject) => {
    const readable = new Readable();
    readable.push(buffer);
    readable.push(null);

    const stream = cloudinary.uploader.upload_stream(
      { folder: "book_sell", resource_type: "image" },
      (error, result) => {
        if (error) reject(error);
        else resolve(result);
      }
    );

    readable.pipe(stream);
  });
};

const addbook = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ success: false, message: "Image file is required" });
    }

    const ownerId = req.user?.id || req.userId || req.body?.userId;
    if (!ownerId) {
      return res.status(401).json({ success: false, message: "not authorized login first" });
    }

    const uploadResult = await uploadToCloudinary(req.file.buffer);
    const book = new bookModel({
      book_name: req.body.book_name,
      description: req.body.description,
      price: req.body.price,
      category: req.body.category,
      image: uploadResult.secure_url,
      imagePublicId: uploadResult.public_id,
      contact_no: req.body.contact_no,
      email: req.body.email,
      owner: ownerId
    });

    await book.save();
    res.json({ success: true, message: " book added" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "book is not added" });
  }
};

// list all books
const listBook = async (req, res) => {
  try {
    const books = await bookModel.find({});
    res.json({ success: true, data: books });
  } catch (err) {
    console.log(err);
    res.json({ success: false, message: err });
  }
};


const removeBook = async (req, res) => {
  try {
    const book = await bookModel.findById(req.body.id);
    if (!book) {
      return res.status(404).json({ success: false, message: "book not found" });
    }

    if (book?.imagePublicId) {
      await cloudinary.uploader.destroy(book.imagePublicId);
    }

    await bookModel.findByIdAndDelete(req.body.id);
    res.json({ success: true, message: "removed" });
  } catch (err) {
    console.log(err);
    res.json({ success: false, message: "not removed successfully" });
  }
};
export {addbook,removeBook,listBook};

