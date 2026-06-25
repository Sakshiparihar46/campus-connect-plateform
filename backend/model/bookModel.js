import mongoose from"mongoose";

const bookSchema = new mongoose.Schema({
    book_name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    contact_no: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true
    }
});
 const bookModel=mongoose.model("book",bookSchema);
 export default bookModel;