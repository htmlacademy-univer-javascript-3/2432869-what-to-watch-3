import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { AuthStatus as Status, NameSpace } from '../../consts';
import { checkAuthAction, loginAction, logoutAction } from '../api-actions';
import { UserData } from '../../types/user-data';
import { UserProcessState } from '../../types/state';

const initialState: UserProcessState = {
  authStatus: 'Unknown',
  name: undefined,
  avatarUrl: undefined,
  email: undefined,
};

export const userProcess = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(checkAuthAction.fulfilled, (state, action: PayloadAction<UserData>) => {
        state.authStatus = Status.Auth;
        state.name = action.payload.name;
        state.avatarUrl = action.payload.avatarUrl;
        state.email = action.payload.email;
      })
      .addCase(checkAuthAction.rejected, (state) => {
        state.authStatus = Status.NoAuth;
        state.name = undefined;
        state.avatarUrl = undefined;
        state.email = undefined;
      })
      .addCase(loginAction.fulfilled, (state, action: PayloadAction<UserData>) => {
        state.authStatus = Status.Auth;
        state.name = action.payload.name;
        state.avatarUrl = action.payload.avatarUrl;
        state.email = action.payload.email;
      })
      .addCase(loginAction.rejected, (state) => {
        state.authStatus = Status.NoAuth;
        state.name = undefined;
        state.avatarUrl = undefined;
        state.email = undefined;
      })
      .addCase(logoutAction.fulfilled, (state) => {
        state.authStatus = Status.NoAuth;
        state.name = undefined;
        state.avatarUrl = undefined;
        state.email = undefined;
      });
  }
});
