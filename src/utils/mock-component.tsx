import { MemoryHistory, createMemoryHistory } from 'history';
import HistoryRouter from '../components/history-router/history-router';
import { MockStore, configureMockStore } from '@jedmao/redux-mock-store';
import MockAdapter from 'axios-mock-adapter';
import { State } from '../types/state';
import { createAPI } from '../services/api';
import thunk from 'redux-thunk';
import { Action } from 'redux';
import { AppThunkDispatch } from './mocks';
import { Provider } from 'react-redux';
import { PropsWithChildren } from 'react';

export function withHistory(component: JSX.Element, history?: MemoryHistory) {
  const memoryHistory = history ?? createMemoryHistory();

  return (
    <HistoryRouter history={memoryHistory}>
      {component}
    </HistoryRouter>
  );
}

type ComponentWithMockStore = {
  withStoreComponent: JSX.Element;
  mockStore: MockStore;
  mockAxiosAdapter: MockAdapter;
}

export function withStore(component: JSX.Element, initialState: Partial<State> = {}): ComponentWithMockStore {
  const axios = createAPI();
  const mockAxiosAdapter = new MockAdapter(axios);
  const middleware = [thunk.withExtraArgument(axios)];
  const mockStoreCreator = configureMockStore<State, Action<string>, AppThunkDispatch>(middleware);
  const mockStore = mockStoreCreator(initialState);

  return ({
    withStoreComponent: <Provider store={mockStore}>{component}</Provider>,
    mockStore,
    mockAxiosAdapter,
  });
}

export function createStoreWrapper(initialState: Partial<State>) {
  return function storeWrapper({ children }: PropsWithChildren): JSX.Element {
    const axios = createAPI();
    const middleware = [thunk.withExtraArgument(axios)];
    const mockStoreCreator = configureMockStore<State, Action<string>, AppThunkDispatch>(middleware);
    const mockStore = mockStoreCreator(initialState);

    return (
      <Provider store={mockStore}>
        { children }
      </Provider>
    );
  };
}
