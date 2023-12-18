import { renderHook } from '@testing-library/react';
import { Genres } from '../../consts';
import { PropsWithChildren } from 'react';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { Provider } from 'react-redux';
import { createAPI } from '../../services/api';
import { AppThunkDispatch } from '../../utils/mocks';
import { State } from '../../types/state';
import { Action } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { useFilmsByGenre } from './use-films-by-genre';
import { mockFilmsShortData } from '../../mocks/films-short-data';

describe('Hook: useFilmByGenre', () => {

  function StoreWrapper({ children }: PropsWithChildren): JSX.Element {
    const axios = createAPI();
    const middleware = [thunk.withExtraArgument(axios)];
    const mockStoreCreator = configureMockStore<State, Action<string>, AppThunkDispatch>(middleware);
    const mockStore = mockStoreCreator({ FilmsData: { filmsData: mockFilmsShortData }});

    return (
      <Provider store={mockStore}>
        { children }
      </Provider>
    );
  }

  it('should filter films data by genre', () => {
    const genre = Genres.Drama;

    const { result: { current: hookFilmsData } } = renderHook(() => useFilmsByGenre(genre), { wrapper: StoreWrapper });

    hookFilmsData?.forEach((filmData) => {
      expect(filmData.genre).toBe(genre);
    });
  });
});
