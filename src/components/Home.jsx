import React, { useState } from 'react';
import '../styles/Home.css';
import Book from './Book';
import Form from './Form';

const booksArr = [
  { id: 1, title: '12 Rules For Life', author: 'Jordan B. Peterson' },
  { id: 2, title: 'The Power of Habit', author: 'Charles Duhigg' },
  { id: 3, title: 'How to Win Friends and Influence People', author: 'Dale Carnigie' },
];

const Home = () => {
  const [state] = useState(booksArr);
  return (
    <>
      <section className="book-list">
        <Form />
        {state.map((booksArr) => (
          <Book
            key={booksArr.id}
            title={booksArr.title}
            author={booksArr.author}
          />
        ))}
      </section>
    </>
  );
};

export default Home;
