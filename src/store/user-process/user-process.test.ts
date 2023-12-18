import { internet, name } from 'faker';
import { AuthStatus } from '../../consts';
import { checkAuthAction, loginAction, logoutAction } from '../api-actions';
import { userProcess } from './user-process';
import { UserData } from '../../types/user-data';
import { AuthData } from '../../types/auth-data';

describe('UserProcess Slice', () => {
  it('returns initial state with empty action', () => {
    const emptyAction = { type: '' };
    const expectedState = { authStatus: AuthStatus.Auth };

    const result = userProcess.reducer(expectedState, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('returns default initial state with empty action', () => {
    const emptyAction = { type: '' };
    const expectedState = { authStatus: AuthStatus.Unknown };

    const result = userProcess.reducer(undefined, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('set "Auth" and user data with "checkAuthAction.fulfilled" action', () => {
    const userData: UserData = { name: name.firstName(), avatarUrl: internet.url(), email: internet.email() };
    const initialState = { authStatus: AuthStatus.NoAuth };
    const expectedState = { authStatus: AuthStatus.Auth, ...userData };

    const result = userProcess.reducer(initialState, checkAuthAction.fulfilled(userData, '', undefined));

    expect(result).toEqual(expectedState);
  });

  it('set "NoAuth" and clear user data with "checkAuthAction.rejected" action', () => {
    const initialState = { authStatus: AuthStatus.Auth, name: name.firstName(), avatarUrl: internet.url(), email: internet.email() };
    const expectedState = { authStatus: AuthStatus.NoAuth };

    const result = userProcess.reducer(initialState, checkAuthAction.rejected);

    expect(result).toEqual(expectedState);
  });

  it('set "Auth" and user data with "loginAction.fulfilled" action', () => {
    const authData: AuthData = { email: internet.email(), password: 'aaa111' };
    const userData: UserData = { name: name.firstName(), avatarUrl: internet.url(), email: internet.email() };
    const initialState = { authStatus: AuthStatus.NoAuth };
    const expectedState = { authStatus: AuthStatus.Auth, ...userData };

    const result = userProcess.reducer(initialState, loginAction.fulfilled(userData, '', authData));

    expect(result).toEqual(expectedState);
  });

  it('set "NoAuth" and clear user data with "loginAction.rejected" action', () => {
    const initialState = { authStatus: AuthStatus.Auth, name: name.firstName(), avatarUrl: internet.url(), email: internet.email() };
    const expectedState = { authStatus: AuthStatus.NoAuth };

    const result = userProcess.reducer(initialState, loginAction.rejected);

    expect(result).toEqual(expectedState);
  });

  it('set "NoAuth" and clear user data with "logoutAction.fulfilled" action', () => {
    const initialState = { authStatus: AuthStatus.Auth, name: name.firstName(), avatarUrl: internet.url(), email: internet.email() };
    const expectedState = { authStatus: AuthStatus.NoAuth };

    const result = userProcess.reducer(initialState, logoutAction.fulfilled);

    expect(result).toEqual(expectedState);
  });
});
