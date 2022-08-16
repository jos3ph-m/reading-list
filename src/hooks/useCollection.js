import { useState, useEffect } from 'react';
import { db } from '../firebase.config';

export const useCollection = () => {
  const [documents, setDocuments] = useState(null);

  useEffect(() => {}, []);
};
