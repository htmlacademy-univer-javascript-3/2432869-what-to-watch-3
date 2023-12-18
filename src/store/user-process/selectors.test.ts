import { internet, name } from 'faker';
import { AuthStatus, NameSpace } from '../../consts';
import { UserProcessState } from '../../types/state';
import { getAuthStatus, getUserAvatar, getUserEmail, getUserName } from './selectors';

describe('UserProcess selectors', () => {
  it('returns authorization status from state', () => {
    const authStatus = AuthStatus.Auth;
    const state: UserProcessState = { authStatus };

    const result = getAuthStatus({ [NameSpace.User]: state });

    expect(result).toBe(authStatus);
  });

  it('returns user name from state', () => {
    const userName = name.firstName();
    const state: UserProcessState = { authStatus: AuthStatus.Auth, name: userName };

    const result = getUserName({ [NameSpace.User]: state });

    expect(result).toBe(userName);
  });

  it('returns user avatar url from state', () => {
    const userEmail = internet.email();
    const state: UserProcessState = { authStatus: AuthStatus.Auth, email: userEmail };

    const result = getUserEmail({ [NameSpace.User]: state });

    expect(result).toBe(userEmail);
  });

  it('returns user email from state', () => {
    const userAvatarUrl = internet.url();
    const state: UserProcessState = { authStatus: AuthStatus.Auth, avatarUrl: userAvatarUrl };

    const result = getUserAvatar({ [NameSpace.User]: state });

    expect(result).toBe(userAvatarUrl);
  });
});
