import { NameSpace } from '../../consts';
import { AuthStatus } from '../../types/auth-status';
import { State } from '../../types/state';

export const getUserName = (state: Pick<State, 'User'>): string | undefined => state[NameSpace.User].name;
export const getUserAvatar = (state: Pick<State, 'User'>): string | undefined => state[NameSpace.User].avatarUrl;
export const getUserEmail = (state: Pick<State, 'User'>): string | undefined => state[NameSpace.User].email;
export const getAuthStatus = (state: Pick<State, 'User'>): AuthStatus => state[NameSpace.User].authStatus;
