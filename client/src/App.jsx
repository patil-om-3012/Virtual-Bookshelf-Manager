import React from "react";
import { Routes, Route } from 'react-router-dom';
import Home from './Home.jsx';
import Add from './Add.jsx';
import Update from './Update.jsx';
import Delete from './Delete.jsx';

function App() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/books/add' element={<Add />} />
            <Route path='/books/update/:id' element={<Update />} />
            <Route path='/books/delete/:id' element={<Delete />} />
        </Routes>
    );
}

export default App;
