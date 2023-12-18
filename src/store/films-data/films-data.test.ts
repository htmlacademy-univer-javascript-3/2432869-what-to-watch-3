import { mockFilmsData } from '../../mocks/films-data';
import { mockFilmsShortData } from '../../mocks/films-short-data';
import { mockPromoFilmData } from '../../mocks/promo-film-data';
import { FilmShortData } from '../../types/film-short-data';
import { FilmsDataState } from '../../types/state';
import { fetchFilmDataAction, fetchFilmsDataAction, fetchPromoFilmDataAction, fetchSimilarFilmsDataAction } from '../api-actions';
import { filmsData } from './films-data';

describe('FilmsData Slice', () => {
  it('return initial state with empty action', () => {
    const emptyAction = { type: '' };
    const expectedState: FilmsDataState = {
      filmData: mockFilmsData[0],
      promoFilmData: mockPromoFilmData,
      filmsData: mockFilmsShortData,
      similarFilmsData: mockFilmsShortData,
    };

    const result = filmsData.reducer(expectedState, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('return default initial state with empty action', () => {
    const emptyAction = { type: '' };
    const expectedState: FilmsDataState = {
      filmData: undefined,
      promoFilmData: undefined,
      filmsData: [],
      similarFilmsData: [],
    };

    const result = filmsData.reducer(undefined, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('set "undefined" to "filmData" with "fetchFilmDataAction.pending" action', () => {
    const initialState: FilmsDataState = {
      filmData: mockFilmsData[0],
    };
    const expectedFilm = undefined;

    const result = filmsData.reducer(initialState, fetchFilmDataAction.pending);

    expect(result.filmData).toEqual(expectedFilm);
  });

  it('set film data with "fetchFilmDataAction.fulfilled" action', () => {
    const expectedFilm = mockFilmsData[0];

    const result = filmsData.reducer(undefined, fetchFilmDataAction.fulfilled(expectedFilm, '', ''));

    expect(result.filmData).toEqual(expectedFilm);
  });

  it('set "undefined" to "promoFilmData" with "fetchPromoFilmDataAction.pending" action', () => {
    const initialState: FilmsDataState = {
      promoFilmData: mockPromoFilmData,
    };
    const expectedPromoFilm = undefined;

    const result = filmsData.reducer(initialState, fetchPromoFilmDataAction.pending);

    expect(result.promoFilmData).toEqual(expectedPromoFilm);
  });

  it('set promo film data with "fetchPromoFilmDataAction.fulfilled" action', () => {
    const expectedPromoFilm = mockPromoFilmData;

    const result = filmsData.reducer(undefined, fetchPromoFilmDataAction.fulfilled(expectedPromoFilm, '', undefined));

    expect(result.promoFilmData).toEqual(expectedPromoFilm);
  });

  it('set "undefined" to "filmsData" with "fetchFilmsDataAction.pending" action', () => {
    const initialState: FilmsDataState = {
      filmsData: mockFilmsShortData,
    };
    const expectedFilms = undefined;

    const result = filmsData.reducer(initialState, fetchFilmsDataAction.pending);

    expect(result.filmsData).toEqual(expectedFilms);
  });

  it('set films data with "fetchFilmsDataAction.fulfilled" action', () => {
    const expectedFilms = mockFilmsShortData;

    const result = filmsData.reducer(undefined, fetchFilmsDataAction.fulfilled(expectedFilms, '', undefined));

    expect(result.filmsData).toEqual(expectedFilms);
  });

  it('set empty array to "filmsData" with "fetchFilmsDataAction.rejected" action', () => {
    const expectedFilms: FilmShortData[] = [];

    const result = filmsData.reducer(undefined, fetchFilmsDataAction.rejected);

    expect(result.filmsData).toEqual(expectedFilms);
  });

  it('set "undefined" to "similarFilmsData" with "fetchSimilarFilmsDataAction.pending" action', () => {
    const initialState: FilmsDataState = {
      similarFilmsData: mockFilmsShortData,
    };
    const expectedSimilarFilms = undefined;

    const result = filmsData.reducer(initialState, fetchSimilarFilmsDataAction.pending);

    expect(result.similarFilmsData).toEqual(expectedSimilarFilms);
  });

  it('set similar films data with "fetchSimilarFilmsDataAction.fulfilled" action', () => {
    const expectedSimilarFilms = mockFilmsShortData;

    const result = filmsData.reducer(undefined, fetchSimilarFilmsDataAction.fulfilled(expectedSimilarFilms, '', ''));

    expect(result.similarFilmsData).toEqual(expectedSimilarFilms);
  });

  it('set empty array to "similarFilmsData" with "fetchSimilarFilmsDataAction.rejected" action', () => {
    const expectedSimilarFilms: FilmShortData[] = [];

    const result = filmsData.reducer(undefined, fetchSimilarFilmsDataAction.rejected);

    expect(result.similarFilmsData).toEqual(expectedSimilarFilms);
  });
});
