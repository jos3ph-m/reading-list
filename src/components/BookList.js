// imports
import { db } from '../firebase/config';
import { doc, deleteDoc } from 'firebase/firestore';

export default function BookList({ books }) {
  const handleClick = async (id) => {
    const docRef = doc(db, 'books', id);
    await deleteDoc(docRef);
  };

  return (
    <div className="books">
      <ul>
        {books.map((book) => (
          <li key={book.id} onClick={() => handleClick(book.id)}>
            {book.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
