import { useAuthContext } from './useAuthContext';

// firebase imports
import { auth } from '../firebase/config';
import { signOut } from 'firebase/auth';

export const useLogout = () => {
  const { dispatch } = useAuthContext();
  const logout = () => {
    signOut(auth)
      .then(() => {
        dispatch({});
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return { logout };
};
