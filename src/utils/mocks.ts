import { AuthStatus } from '../consts';
import { Action } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { createAPI } from '../services/api';
import { State } from '../types/state';

export type AppThunkDispatch = ThunkDispatch<State, ReturnType<typeof createAPI>, Action>;

export const extractActionsTypes = (actions: Action<string>[]) => actions.map(({ type }) => type);

export const makeFakeStore = (initialState?: Partial<State>): State => ({
  Error: { errorCode: undefined },
  Genre: { genre: 'All genres' },
  FilmsData: { filmsData: [], similarFilmsData: [] },
  FavoriteFilmsData: { favoriteFilmsData: [], isCurrentFilmFavorite: false },
  ReviewsData: { reviewsData: [] },
  User: { authStatus: AuthStatus.NoAuth },
  ...initialState ?? {},
});
