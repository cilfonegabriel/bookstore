import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { listBooks } from '../../redux/book/book';
import Add from '../../components/addBook/addBook';
import Books from '../../components/books/books';

const Home = () => {
  const booksList = useSelector((state) => state.books);
  const send = useDispatch();

  useEffect(() => {
    send(listBooks());
  }, [send]);

  let display = '';
  display = booksList.map((item) => (
    <Books
      id={item.id}
      key={item.id}
      book={item}
      title={item.title}
      author={item.author}
      category={item.category}
    />
  ));
  return (
    <section>
      {display}
      <Add />
    </section>

  );
};
export default Home;
