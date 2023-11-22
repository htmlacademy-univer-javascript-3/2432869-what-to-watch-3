import { NameSpace } from '../../consts';
import { AuthStatus } from '../../types/auth-status';
import { State } from '../../types/state';

export const getAuthStatus = (state: State): AuthStatus => state[NameSpace.User].authStatus;
