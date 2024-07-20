import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const bookSchema = new Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    genre: { type: String ,required:true},
    pageNumber: { type: Number, default: 0 },
});

const Book = mongoose.model('Book', bookSchema);

export default Book;
