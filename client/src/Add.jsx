import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Add.css'; 

const Add = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [genre,setGenre] = useState('');
  const navigate = useNavigate();

  const handleSaveBook = () => {
    const data = {
      title,
      author,
      genre,
    };

    axios
      .post('http://localhost:5000/books/', data)
      .then(() => {
        alert('Book Created successfully');
        navigate('/');
      })
      .catch((error) => {
        alert('An error happened. Please check the console');
        console.log(error);
      });
  };

  return (
    <div className='container'>
      <h1 className='header-title'>Create Book</h1>
      <div className='form-container'>
        <div className='form-group'>
          <label className='form-label'>Title</label>
          <input
            type='text'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className='form-input'
          />
        </div>
        <div className='form-group'>
          <label className='form-label'>Author</label>
          <input
            type='text'
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className='form-input'
          />
        </div>
        <div className='form-group'>
          <label className='form-label'>Genre</label>
          <input
            type='text'
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
            className='form-input'
          />
        </div>
        <button className='submit-button' onClick={handleSaveBook}>
          Save
        </button>
      </div>
    </div>
  );
};

export default Add;
