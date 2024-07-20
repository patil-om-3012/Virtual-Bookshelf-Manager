import Book from '../models/book.js'

/*Get all books*/
export const getBooks = async (req, res) => {
    try {
        const books = await Book.find({});
        return res.status(201).send(books);
    }
    catch (err) {
        console.log(err);
    }
}

/*Find a book*/
export const findBook = async (req, res) => {
    try {
        const { id } = req.params;
        const book = await Book.findById(id);
        if (!book) {
            return res.status(404).send('Book not found');
        }
        res.status(201).send(book);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

/*add a book*/
export const addBook = async (req, res) => {
    try {
        const { title, author, genre, pageNumber } = req.body;
        const newBook = new Book({
            title: title,
            author: author,
            genre: genre,
            pageNumber: pageNumber
        })

        await newBook.save();

        const books = await Book.find();
        res.status(201).json(books);
    }
    catch (err) {
        console.log(err)
    }
}

/*update page number*/
export const update = async (req, res) => {
    try {
        const { id } = req.params;
        const { pageNumber } = req.body;
        const book = await Book.findById(id);
        if (!book) {
            return res.status(404).json({ message: 'Book not found' });
        }

        book.pageNumber = pageNumber;
        await book.save();

        res.status(200).json(book);
    }
    catch (err) {
        res.status(500).send({ message: 'Error while updating the page number!' });
    }
};

/*delete a book*/
export const deleteBook = async (req, res) => {
    try {
        const { id } = req.params;
        const book = await Book.findByIdAndDelete(id);
        if (!book) {
            return res.status(404).json({ message: 'Book not found' });
        }

        res.status(200).json({ message: 'Book deleted successfully' });
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};
