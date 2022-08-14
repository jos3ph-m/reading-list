import { useEffect, useState } from 'react';
import BookList from '../components/BookList';
import BookForm from '../components/BookForm';

export default function Home() {
  const [books, setBooks] = useState(null);

  useEffect(() => {}, []);

  return (
    <div>
      {books && <BookList books={books} />}
      <BookForm />
    </div>
  );
}
