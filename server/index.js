import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from 'dotenv';
import Book from './models/book.js'
dotenv.config();

import booksRouter from './routes/book.js';

const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
});


const PORT = 5000;
const app = express();

app.use(cors());
app.use(express.json());

//MongoDB connection
const uri = process.env.MONGODB_URI
mongoose.connect(uri)
  .then(() => {
    console.log('Successfully connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });

app.use('/books', booksRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});

