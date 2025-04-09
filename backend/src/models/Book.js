import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    title: { type: String, required: true },
    publisher: { type: String },
    rating: { type: Number },
    comments: { type: String },
    coverUrl: { type: String},
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "authors",
        required: true
    }
}, { versionKey: false });

const book = mongoose.model("books", bookSchema);

export default book