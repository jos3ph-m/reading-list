import { useEffect, useState } from 'react';
import BookList from '../components/BookList';
import BookForm from '../components/BookForm';

import { db } from '../firebase/config';
import { collection, getDocs } from 'firebase/firestore';

export default function Home() {
  const [books, setBooks] = useState(null);

  useEffect(() => {
    const ref = collection(db, 'books');

    getDocs(ref).then((snapshot) => {
      snapshot.docs.forEach((doc) => {});
    });
  }, []);

  return (
    <div>
      {books && <BookList books={books} />}
      <BookForm />
    </div>
  );
}
