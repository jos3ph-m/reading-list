import { useState } from 'react';
import BookList from '../components/BookList';
import BookForm from '../components/BookForm';

export default function Home() {
  const [books, setBooks] = useState([]);

  return (
    <div>
      {books && <BookList books={books} />}
      <BookForm />
    </div>
  );
}
