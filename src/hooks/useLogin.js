import { useState } from 'react';
import { useAuthContext } from './useAuthContext';

// firebase imports
import { auth } from '../firebase/config';
import { signInWithEmailAndPassword } from 'firebase/auth';

export const useLogin = () => {
  const [error, setError] = useState(null);
  const { dispatch } = useAuthContext();

  const login = (email, password) => {
    setError(null);
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        dispatch({ type: 'LOGIN', payload: res.user });
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  return { error, login };
};
