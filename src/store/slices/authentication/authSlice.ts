import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { getToken, getUserFromToken } from 'services/auth.servise';

interface authState {
    user: string | null;
    token: string | null;
    isAuthenticated: boolean;
}

const getInit = (): authState => {
  const token = getToken();
  if (token) {
    const user = getUserFromToken(token);
    return {
      isAuthenticated: true,
      user: user,
      token: token,
    };
  } else {
    return {
      isAuthenticated: false,
      user: null,
      token: null,
    };
  }
};

const initialState: authState = {
  isAuthenticated: false,
  user: null,
  token: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState: getInit(),
  reducers: {
    logIn: (state, action: PayloadAction<authState>) => ({ ...state, ...action.payload }),
    logOut: () => (initialState),
  },
});

export const { logIn, logOut } = authSlice.actions;