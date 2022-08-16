import { useState, useEffect } from 'react';
import { db } from '../firebase.config';

// firebase imports
import { collection, onSnapshot } from 'firebase/firestore';

export const useCollection = () => {
  const [documents, setDocuments] = useState(null);

  useEffect(() => {}, []);
};
