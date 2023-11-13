import { createAction } from '@reduxjs/toolkit';
import { Genre } from '../mocks/genres';
import { AuthStatus } from '../types/auth-status';
import { ReviewData } from '../types/review-data';
import { PromoFilmData } from '../types/promo-film-data';
import { ShortFilmData } from '../types/short-film-data';
import { FilmData } from '../types/film-data';
import { AppRoutes } from '../types/app-routes';

export const setGenre = createAction<Genre>('genre/setGenre');

export const loadFilms = createAction<ShortFilmData[]>('films/loadFilms');
export const loadFilm = createAction<FilmData | undefined>('films/loadFilm');
export const loadSimilarFilms = createAction<ShortFilmData[]>('films/loadSimilarFilms');
export const loadPromoFilm = createAction<PromoFilmData>('films/loadPromoFilm');

export const loadFavoriteFilms = createAction<ShortFilmData[]>('favorite/loadFavoriteFilms');
// export const setFavoriteFilm = createAction<FilmData>('favorite/setFavoriteFilm');

export const loadReviews = createAction<ReviewData[]>('review/loadReviews');
// export const addReview = createAction<ReviewData>('review/addReview');

export const setAuth = createAction<AuthStatus>('requireAuth');

export const redirectToRoute = createAction<AppRoutes>('game/redirectToRoute');
