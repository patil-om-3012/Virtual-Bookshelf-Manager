import React from 'react';
import './SingleBookCard.css';
import { Link } from 'react-router-dom';
import { IconButton } from '@mui/material';
import BookIcon from '@mui/icons-material/Book';
import PersonIcon from '@mui/icons-material/Person';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import EditIcon from '@mui/icons-material/Edit';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import DeleteIcon from '@mui/icons-material/Delete';

const BookSingleCard = ({ book }) => {
  return (
    <div className='card'>
      <div className='info'>
        <BookIcon className='info-icon' />
        <h2 className='info-text'>{book.title}</h2>
      </div>
      <div className='info'>
        <PersonIcon className='info-icon' />
        <h2 className='info-text'>{book.author}</h2>
      </div>
      <div className='info'>
        <HistoryEduIcon className='info-icon' />
        <h2 className='info-text'>{book.genre}</h2>
      </div>
      <div className='info'>
        <AutoStoriesIcon className='info-icon' />
        <h2 className='info-text'>{book.pageNumber}</h2>
      </div>
      <div className='actions'>
        <Link to={`/books/update/${book._id}`}>
          <IconButton className='action-icon'>
            <EditIcon />
          </IconButton>
        </Link>
        <Link to={`/books/delete/${book._id}`}>
          <IconButton className='action-icon'>
            <DeleteIcon />
          </IconButton>
        </Link>
      </div>
    </div>
  );
};

export default BookSingleCard;
