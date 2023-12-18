import { MockStore, configureMockStore } from '@jedmao/redux-mock-store';
import { redirectMiddleware } from './redirect';
import browserHistory from '../../browser-history';
import { AnyAction } from '@reduxjs/toolkit';
import { redirectToRoute } from '../action';
import { AppRoutes } from '../../app-routes';
import { State } from '../../types/state';

vi.mock('../../browser-history', () => ({
  default: {
    location: { pathname: ''},
    push(path: string) {
      this.location.pathname = path;
    }
  }
}));

describe('Redirect middleware', () => {
  let store: MockStore;

  beforeAll(() => {
    const middleware = [redirectMiddleware];
    const mockStoreCreator = configureMockStore<State, AnyAction>(middleware);
    store = mockStoreCreator();
  });

  beforeEach(() => {
    browserHistory.push('');
  });

  it('redirect to "/login" with redirectToRoute action', () => {
    const redirectAction = redirectToRoute(AppRoutes.Login.FullPath);
    store.dispatch(redirectAction);
    expect(browserHistory.location.pathname).toBe(AppRoutes.Login.FullPath);
  });

  it('don`t redirect to "/myList" with empty action', () => {
    const emptyAction = { type: '', payload: AppRoutes.MyList.FullPath };
    store.dispatch(emptyAction);
    expect(browserHistory.location.pathname).not.toBe(AppRoutes.MyList.FullPath);
  });
});
