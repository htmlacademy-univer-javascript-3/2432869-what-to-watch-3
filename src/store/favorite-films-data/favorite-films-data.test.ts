import { mockFilmsShortData } from '../../mocks/films-short-data';
import { FilmShortData } from '../../types/film-short-data';
import { FavoriteFilmsDataState } from '../../types/state';
import { fetchFavoriteFilmsDataAction } from '../api-actions';
import { favoriteFilmsData, setIsCurrentFilmFavorite } from './favorite-films-data';

describe('FavoriteFilmsData Slice', () => {
  it('returns initial state with empty action', () => {
    const emptyAction = { type: '' };
    const expectedState: FavoriteFilmsDataState = { favoriteFilmsData: mockFilmsShortData, isCurrentFilmFavorite: true };

    const result = favoriteFilmsData.reducer(expectedState, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('returns default initial state with empty action', () => {
    const emptyAction = { type: '' };
    const expectedState: FavoriteFilmsDataState = { favoriteFilmsData: [], isCurrentFilmFavorite: false };

    const result = favoriteFilmsData.reducer(undefined, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('set boolean to "isCurrentFilmFavorite" with "setIsCurrentFilmFavorite" action', () => {
    const initialState: FavoriteFilmsDataState = { isCurrentFilmFavorite: false };
    const expectedValue = true;

    const result = favoriteFilmsData.reducer(initialState, setIsCurrentFilmFavorite(expectedValue));

    expect(result.isCurrentFilmFavorite).toEqual(expectedValue);
  });

  it('set "undefined" to "favoriteFilms" with "fetchFavoriteFilmsDataAction.pending" action', () => {
    const initialState: FavoriteFilmsDataState = { favoriteFilmsData: mockFilmsShortData, isCurrentFilmFavorite: false };
    const expectedFavoriteFilms = undefined;

    const result = favoriteFilmsData.reducer(initialState, fetchFavoriteFilmsDataAction.pending);

    expect(result.favoriteFilmsData).toEqual(expectedFavoriteFilms);
  });

  it('set favorite films data with "fetchFavoriteFilmsDataAction.fulfilled" action', () => {
    const expectedFavoriteFilms = mockFilmsShortData;

    const result = favoriteFilmsData.reducer(undefined, fetchFavoriteFilmsDataAction.fulfilled(mockFilmsShortData, '', undefined));

    expect(result.favoriteFilmsData).toEqual(expectedFavoriteFilms);
  });

  it('set empty array to "favoriteFilms" with "fetchFavoriteFilmsDataAction.rejected" action', () => {
    const expectedFavoriteFilms: FilmShortData[] = [];

    const result = favoriteFilmsData.reducer(undefined, fetchFavoriteFilmsDataAction.rejected);

    expect(result.favoriteFilmsData).toEqual(expectedFavoriteFilms);
  });
});
