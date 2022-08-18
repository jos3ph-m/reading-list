import { useState } from 'react';

export const useSignup = () => {
  const [error, setError] = useState(null);

  const signup = (email, password) => {};

  return { error, signup };
};
