import { NameSpace } from '../../consts';
import { mockFilmsData } from '../../mocks/films-data';
import { mockPromoFilmData } from '../../mocks/promo-film-data';
import { mockFilmsShortData } from '../../mocks/films-short-data';
import { FilmsDataState } from '../../types/state';
import { getFilmData, getPromoFilmData, getFilmsData, getSimilarFilmData } from './selectors';

describe('FilmsData selectors', () => {
  it('return film data from state', () => {
    const expectedFilm = mockFilmsData[0];
    const state: FilmsDataState = { filmData: expectedFilm };

    const result = getFilmData({ [NameSpace.FilmsData]: state });

    expect(result).toBe(expectedFilm);
  });

  it('return promo film data from state', () => {
    const expectedPromoFilm = mockPromoFilmData;
    const state: FilmsDataState = { promoFilmData: expectedPromoFilm };

    const result = getPromoFilmData({ [NameSpace.FilmsData]: state });

    expect(result).toBe(expectedPromoFilm);
  });

  it('return films data from state', () => {
    const expectedFilms = mockFilmsShortData;
    const state: FilmsDataState = { filmsData: expectedFilms };

    const result = getFilmsData({ [NameSpace.FilmsData]: state });

    expect(result).toBe(expectedFilms);
  });

  it('return similar films data from state', () => {
    const expectedSimilarFilms = mockFilmsShortData;
    const state: FilmsDataState = { similarFilmsData: expectedSimilarFilms };

    const result = getSimilarFilmData({ [NameSpace.FilmsData]: state });

    expect(result).toBe(expectedSimilarFilms);
  });
});
