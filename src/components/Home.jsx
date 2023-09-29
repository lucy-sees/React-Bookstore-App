import '../styles/Home.css';
import { useSelector, useDispatch } from 'react-redux';
import { MdDeleteOutline } from 'react-icons/md';
import Book from './Book';
import Form from './Form';
import { removeBook } from '../redux/books/bookSlice';

const Home = () => {
  const dispatch = useDispatch();
  const bookNames = useSelector((state) => state.books);

  // const handleAddBook = (book) => {
  //   dispatch(addBook(book));
  // };

  const handleRemoveBook = (bookId) => {
    dispatch(removeBook(bookId));
  };

  return (
    <>
      <section className="book-list">
        <Form />
        {bookNames.map((book) => (
          <article className="one-book" key={book.id}>
            <Book title={book.title} author={book.author} />

            <button type="button" className="not-visible" onClick={() => handleRemoveBook(book.id)}>
              <MdDeleteOutline className="book-delete-btn" />
            </button>
          </article>
        ))}
      </section>
    </>
  );
};

export default Home;
