import { useState } from 'react';

// firebase imports
import { auth } from '../firebase/config';
import { createUserWithEmailAndPassword } from 'firebase/auth';

export const useSignup = () => {
  const [error, setError] = useState(null);

  const signup = (email, password) => {
    // set error to null
    setError(null);
  };

  return { error, signup };
};
