import { createReducer } from '@reduxjs/toolkit';
import { FilmData } from '../types/film-data';
import { setGenre, loadFilms, loadReviews, setAuth, loadFavoriteFilms, loadSimilarFilms, loadFilm, loadPromoFilm } from './action';
import { Genre } from '../mocks/genres';
import { AuthStatus } from '../types/auth-status';
import { ShortFilmData } from '../types/short-film-data';
import { ReviewData } from '../types/review-data';
import { PromoFilmData } from '../types/promo-film-data';

type InitialState = {
  genre: Genre;
  filmData?: FilmData;
  promoFilmData?: PromoFilmData;
  filmsData: ShortFilmData[];
  similarFilmsData: ShortFilmData[];
  favoriteFilmsData: ShortFilmData[];
  reviewsData: ReviewData[];
  authStatus: AuthStatus;
};

const initialState: InitialState = {
  genre: 'All genres',
  filmData: undefined,
  promoFilmData: undefined,
  filmsData: [],
  similarFilmsData: [],
  favoriteFilmsData: [],
  reviewsData: [],
  authStatus: 'Unknown',
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setGenre, (state, action) => {
      state.genre = action.payload;
    })
    .addCase(loadFilm, (state, action) => {
      state.filmData = action.payload;
    })
    .addCase(loadPromoFilm, (state, action) => {
      state.promoFilmData = action.payload;
    })
    .addCase(loadFilms, (state, action) => {
      state.filmsData = action.payload;
    })
    .addCase(loadSimilarFilms, (state, action) => {
      state.similarFilmsData = action.payload;
    })
    .addCase(loadFavoriteFilms, (state, action) => {
      state.favoriteFilmsData = action.payload;
    })
    .addCase(loadReviews, (state, action) => {
      state.reviewsData = action.payload;
    })
    .addCase(setAuth, (state, action) => {
      state.authStatus = action.payload;
    });
});
