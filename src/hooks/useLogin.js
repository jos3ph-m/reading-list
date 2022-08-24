import { useState } from 'react';

export const useLogin = () => {
  const [error, setError] = useState(null);

  const login = (email, password) => {
    setError(null);
  };

  return { error, login };
};
