import { NameSpace } from '../../consts';
import { mockFilmsShortData } from '../../mocks/films-short-data';
import { FavoriteFilmsDataState } from '../../types/state';
import { getFavoriteFilmData, getFavoriteFilmsCount, isCurrentFilmFavorite } from './selectors';

describe('FavoriteFilmsData selectors', () => {
  it('returns favorite films data from state', () => {
    const expecteFavoriteFilmsData = mockFilmsShortData;
    const state: FavoriteFilmsDataState = { favoriteFilmsData: expecteFavoriteFilmsData, isCurrentFilmFavorite: false };

    const result = getFavoriteFilmData({ [NameSpace.FavoriteFilmsData]: state });

    expect(result).toBe(expecteFavoriteFilmsData);
  });

  it('returns favorite films count', () => {
    const favoriteFilmsData = mockFilmsShortData;
    const expectedCount = favoriteFilmsData.length;
    const state: FavoriteFilmsDataState = { favoriteFilmsData: favoriteFilmsData, isCurrentFilmFavorite: false };

    const result = getFavoriteFilmsCount({ [NameSpace.FavoriteFilmsData]: state });

    expect(result).toBe(expectedCount);
  });

  it('returns current film is favorite', () => {
    const expectedValue = true;
    const state: FavoriteFilmsDataState = { isCurrentFilmFavorite: expectedValue };

    const result = isCurrentFilmFavorite({ [NameSpace.FavoriteFilmsData]: state });

    expect(result).toBe(expectedValue);
  });
});
