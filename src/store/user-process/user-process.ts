import { createSlice } from '@reduxjs/toolkit';
import { AuthStatus as Status, NameSpace } from '../../consts';
import { AuthStatus } from '../../types/auth-status';
import { checkAuthAction, loginAction, logoutAction } from '../api-actions';

type UserProcessState = {
  authStatus: AuthStatus;
};

const initialState: UserProcessState = {
  authStatus: 'Unknown',
};

export const userProcess = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(checkAuthAction.fulfilled, (state) => {
        state.authStatus = Status.Auth;
      })
      .addCase(checkAuthAction.rejected, (state) => {
        state.authStatus = Status.NoAuth;
      })
      .addCase(loginAction.fulfilled, (state) => {
        state.authStatus = Status.Auth;
      })
      .addCase(loginAction.rejected, (state) => {
        state.authStatus = Status.NoAuth;
      })
      .addCase(logoutAction.fulfilled, (state) => {
        state.authStatus = Status.NoAuth;
      });
  }
});
