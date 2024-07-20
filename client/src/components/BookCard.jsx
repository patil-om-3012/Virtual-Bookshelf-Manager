import React from 'react';
import SingleBookCard from './SingleBookCard';
import './BookCard.css';

const BookCard = ({ books }) => {
  return (
    <div className='book-card-container'>
      {books.map((book) => (
        <SingleBookCard key={book._id} book={book} />
      ))}
    </div>
  );
};

export default BookCard;
