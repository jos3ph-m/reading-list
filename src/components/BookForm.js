import { useState } from 'react';

export default function BookForm() {
  const [newBook, setNewBook] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(`the book value entered was ${newBook}`);

    setNewBook('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <span>Add a new book title:</span>
        <input
          required
          type="text"
          onChange={(e) => setNewBook(e.target.value)}
          value={newBook}
        />
      </label>
      <button>Add</button>
    </form>
  );
}
