import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { IconButton } from '@mui/material';
import AddBoxIcon from '@mui/icons-material/AddBox';
import BookCard from './components/BookCard';
import './Home.css'; 

const Home = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    console.log('Fetching books...');
    axios
      .get('http://localhost:5000/books/')
      .then((response) => {
        console.log('Books data received:', response.data);
        setBooks(response.data);
      })
      .catch((error) => {
        console.log('Error fetching books:', error);
      });
  }, []);

  return (
    <div className='container'>
      <div className='header'>
        <h1 className='header-title'>Books List</h1>
        <Link to='/books/add'>
          <IconButton className='add-button'>
            <AddBoxIcon />
          </IconButton>
        </Link> 
      </div>
      <div className='book-card-container'>
        <BookCard books={books} /> 
      </div>
    </div>
  );
};

export default Home;
