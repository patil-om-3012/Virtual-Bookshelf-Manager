import React from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import './Delete.css';

const Delete = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const handleDeleteBook = () => {
    axios
      .delete(`http://localhost:5000/books/${id}`)
      .then(() => {
        navigate('/');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className='delete-container'>
      <h1 className='title'>Delete Book</h1>
      <div className='confirmation-box'>
        <h3 className='confirmation-text'>Finished reading this book ? Are you sure you want to delete it?</h3>
        <button
          className='delete-button'
          onClick={handleDeleteBook}
        >
          Yes, Delete it
        </button>
      </div>
    </div>
  );
};

export default Delete;
