import BookList from '../components/BookList';
import BookForm from '../components/BookForm';
import { useCollection } from '../hooks/useCollection';

export default function Home() {
  const { documents: books } = useCollection('books', ['uid', '==', user.uid]);
  return (
    <div>
      {books && <BookList books={books} />}
      <BookForm />
    </div>
  );
}
