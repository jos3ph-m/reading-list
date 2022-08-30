import { createContext, useReducer, useEffect } from 'react';
import { projectAuth } from '../firebase/config';

export const AuthContext = createContext();

export const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, user: action.payload };
    case 'LOGOUT':
      return { ...state, user: null };
  }
  case 'AUTH_IS_READY':
    return { user: action.payload, authIsReady}
  
};
