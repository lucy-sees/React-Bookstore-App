import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Home from './components/Home';
import Categories from './components/Categories';
import { loadBooksAsync } from './redux/books/api';
import './App.css';

const App = () => {
  const dispatch = useDispatch();
  dispatch(loadBooksAsync());
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/categories" element={<Categories />} />
    </Routes>
  );
};

export default App;
