import { Genre } from './genre';
import { store } from '../store/index';
import { AuthStatus } from './auth-status';
import { FilmData } from './film-data';
import { PromoFilmData } from './promo-film-data';
import { ReviewData } from './review-data';
import { FilmShortData } from './film-short-data';

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type UserProcessState = {
  authStatus: AuthStatus;
  name?: string;
  avatarUrl?: string;
  email?: string;
};

export type ErrorProcessState = {
  errorCode: number | undefined;
};

export type GenreProcessState = {
  genre: Genre;
};

export type ReviewsDataState = {
  reviewsData?: ReviewData[];
};

export type FavoriteFilmsDataState = {
  isCurrentFilmFavorite: boolean;
  favoriteFilmsData?: FilmShortData[];
};

export type FilmsDataState = {
  filmData?: FilmData;
  promoFilmData?: PromoFilmData;
  filmsData?: FilmShortData[];
  similarFilmsData?: FilmShortData[];
};
