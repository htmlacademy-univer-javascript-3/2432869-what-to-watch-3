import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { AppDispatch, State } from '../types/state';
import { APIRoute } from '../consts';
import { FilmData } from '../types/film-data';
import { ReviewData } from '../types/review-data';
import { PromoFilmData } from '../types/promo-film-data';
import { ShortFilmData } from '../types/short-film-data';
import { redirectToRoute } from './action';
import { FavoriteStatus } from '../types/status';
import { SetReviewData } from '../types/short-review-data';
import { AuthData } from '../types/auth-data';
import { UserData } from '../types/user-data';
import { saveToken, dropToken } from '../services/token';
import { ROUTES } from '../routes';
import { AppRoutes as AppRoute } from '../types/app-routes';
import { generatePath } from 'react-router-dom';

export const fetchFilmDataAction = createAsyncThunk<FilmData | unknown, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchFilm',
  async (id, { dispatch, extra: api }) => {
    try {
      const {data} = await api.get<FilmData>(`${APIRoute.Films}/${id}`);
      return data;
    } catch {
      dispatch(redirectToRoute(ROUTES.error.fullPath));
    }
  },
);

export const fetchPromoFilmDataAction = createAsyncThunk<PromoFilmData, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchPromoFilm',
  async (_, { extra: api }) => {
    const {data} = await api.get<PromoFilmData>(`${APIRoute.Promo}`);
    return data;
  },
);

export const fetchFilmsDataAction = createAsyncThunk<ShortFilmData[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchFilms',
  async (_, { extra: api }) => {
    const {data} = await api.get<ShortFilmData[]>(APIRoute.Films);
    return data;
  },
);

export const fetchSimilarFilmsDataAction = createAsyncThunk<ShortFilmData[], string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchSimilarFilms',
  async (id, { extra: api }) => {
    const {data} = await api.get<ShortFilmData[]>(`${APIRoute.Films}/${id}/similar`);
    return data;
  },
);

export const fetchFavoriteFilmsDataAction = createAsyncThunk<ShortFilmData[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchFavoriteFilms',
  async (_, { extra: api }) => {
    const {data} = await api.get<ShortFilmData[]>(APIRoute.Favorite);
    return data;
  },
);

export const postFavoriteFilmAction = createAsyncThunk<FilmData, {
  filmId: string;
  status: FavoriteStatus;
}, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/postFavoriteFilm',
  async ({ filmId, status }, { dispatch, extra: api }) => {
    const {data} = await api.post<FilmData>(`${APIRoute.Favorite}/${filmId}/${status}`);
    dispatch(fetchPromoFilmDataAction());
    dispatch(fetchFavoriteFilmsDataAction());
    return data;
  },
);

export const fetchReviewsDataAction = createAsyncThunk<ReviewData[], string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchReviews',
  async (filmId, { extra: api }) => {
    const {data} = await api.get<ReviewData[]>(`${APIRoute.Comments}/${filmId}`);
    return data;
  },
);

export const postReviewAction = createAsyncThunk<ReviewData, SetReviewData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/postReview',
  async ({ filmId, comment, rating }, { dispatch, extra: api }) => {
    const {data} = await api.post<ReviewData>(`${APIRoute.Comments}/${filmId}`, { comment, rating });
    dispatch(redirectToRoute(generatePath(ROUTES.film.fullPath, { id: filmId }) as AppRoute));
    return data;
  },
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_, { dispatch, extra: api }) => {
    await api.get<UserData>(APIRoute.Login);
    dispatch(fetchFavoriteFilmsDataAction());
  },
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({ email, password }, { dispatch, extra: api }) => {
    const {data} = await api.post<UserData>(APIRoute.Login, { email, password });
    saveToken(data.token);
    dispatch(fetchFavoriteFilmsDataAction());
    dispatch(redirectToRoute(ROUTES.main.fullPath));
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_, { dispatch, extra: api }) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(redirectToRoute(ROUTES.login.fullPath));
  },
);
