import { useState } from 'react';

// firebase imports
import { auth } from '../firebase/config';

export const useSignup = () => {
  const [error, setError] = useState(null);

  const signup = (email, password) => {
    setError(null);
  };

  return { error, signup };
};
