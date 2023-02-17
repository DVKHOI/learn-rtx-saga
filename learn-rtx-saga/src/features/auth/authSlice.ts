import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from 'models/user';

export interface LoginPayload {
  username: string;
  password: string;
}

export interface AuthState {
  isLoggedIn: boolean;
  logging: boolean;
  currentUser?: User;
}

const initialState: AuthState = {
  isLoggedIn: false,
  logging: false,
  currentUser: undefined,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action: PayloadAction<LoginPayload>) {
      state.logging = true;
    },
    loginSuccess(state, action: PayloadAction<User>) {
      state.isLoggedIn = true;
      state.logging = true;
      state.currentUser = action.payload;
    },
    loginFailed(state, action: PayloadAction<string>) {
      state.logging = false;
    },
    logout(state) {
      state.isLoggedIn = false;
      state.logging = false;
      state.currentUser = undefined;
    },
  },
});
// export actions
export const authActions = authSlice.actions;
// export selector
export const selectorIsLogging = (state: any) => state.auth.isLogging;
export const selectorisLoggedIn = (state: any) => state.auth.isLoggedIn;
// export reducer
const authReducer = authSlice.reducer;
export default authReducer;
