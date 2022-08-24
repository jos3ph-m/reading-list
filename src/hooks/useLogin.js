import { useState } from 'react';

// firebase imports
import { auth } from '../firebase/config';

export const useLogin = () => {
  const [error, setError] = useState(null);

  const login = (email, password) => {
    setError(null);
  };

  return { error, login };
};
