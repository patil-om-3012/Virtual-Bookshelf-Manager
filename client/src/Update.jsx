import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import './Update.css'; 

const Update = () => {
  const [pageNumber, setPageNumber] = useState('');
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:5000/books/${id}`)
      .then((response) => {
        setPageNumber(response.data.pageNumber);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const handleEditBook = () => {
    const data = {
      pageNumber,
    };
    axios
      .patch(`http://localhost:5000/books/${id}`, data)
      .then(() => {
        navigate('/');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className='edit-container'>
      <h1 className='title'>Edit Book</h1>
      <div className='form-container'>
        <div className='form-group'>
          <label className='label'>Page Number</label>
          <input
            type='number'
            value={pageNumber}
            onChange={(e) => setPageNumber(e.target.value)}
            className='input'
          />
        </div>
        <button className='save-button' onClick={handleEditBook}>
          Save
        </button>
      </div>
    </div>
  );
};

export default Update;
