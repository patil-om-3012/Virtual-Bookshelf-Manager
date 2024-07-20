import express from 'express';
import {
    addBook,
    getBooks,
    findBook,
    update,
    deleteBook
} from '../logic/book.js'; 

const router = express.Router();

router.get('/', getBooks);
router.get('/:id', findBook);
router.post('/', addBook);
router.patch('/:id', update);
router.delete('/:id', deleteBook);

export default router;
