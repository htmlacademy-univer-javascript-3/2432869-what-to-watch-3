import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { AppDispatch, State } from '../types/state';
import { APIRoute } from '../consts';
import { FilmData } from '../types/film-data';
import { ReviewData } from '../types/review-data';
import { PromoFilmData } from '../types/promo-film-data';
import { FilmShortData } from '../types/film-short-data';
import { redirectToRoute } from './action';
import { FavoriteStatus } from '../types/status';
import { SetReviewData } from '../types/short-review-data';
import { AuthData } from '../types/auth-data';
import { UserData } from '../types/user-data';
import { saveToken, dropToken } from '../services/token';
import { AppRoutes } from '../app-routes';
import { AppRoutes as AppRoute } from '../types/app-routes';
import { generatePath } from 'react-router-dom';
import { setIsCurrentFilmFavorite } from './favorite-films-data/favorite-films-data';
import { LoginData } from '../types/login-data';

export const fetchFilmDataAction = createAsyncThunk<FilmData | unknown, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchFilm',
  async (id, { dispatch, extra: api }) => {
    try {
      const response = await api.get<FilmData>(`${APIRoute.Films}/${id}`);
      dispatch(setIsCurrentFilmFavorite(response.data.isFavorite ?? false));
      return response.data;
    } catch {
      dispatch(redirectToRoute(AppRoutes.Error.FullPath));
    }
  },
);

export const fetchPromoFilmDataAction = createAsyncThunk<PromoFilmData, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchPromoFilm',
  async (_, { dispatch, extra: api }) => {
    const {data} = await api.get<PromoFilmData>(`${APIRoute.Promo}`);
    dispatch(setIsCurrentFilmFavorite(data.isFavorite ?? false));
    return data;
  },
);

export const fetchFilmsDataAction = createAsyncThunk<FilmShortData[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchFilms',
  async (_, { extra: api }) => {
    const {data} = await api.get<FilmShortData[]>(APIRoute.Films);
    return data;
  },
);

export const fetchSimilarFilmsDataAction = createAsyncThunk<FilmShortData[], string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchSimilarFilms',
  async (id, { extra: api }) => {
    const {data} = await api.get<FilmShortData[]>(`${APIRoute.Films}/${id}/similar`);
    return data;
  },
);

export const fetchFavoriteFilmsDataAction = createAsyncThunk<FilmShortData[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchFavoriteFilms',
  async (_, { extra: api }) => {
    const {data} = await api.get<FilmShortData[]>(APIRoute.Favorite);
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
    dispatch(setIsCurrentFilmFavorite(data.isFavorite as boolean));
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
    dispatch(redirectToRoute(generatePath(AppRoutes.Film.FullPath, { id: filmId }) as AppRoute));
    return data;
  },
);

export const checkAuthAction = createAsyncThunk<UserData, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_, { dispatch, extra: api }) => {
    const {data} = await api.get<LoginData>(APIRoute.Login);
    dispatch(fetchFavoriteFilmsDataAction());
    return data;
  },
);

export const loginAction = createAsyncThunk<UserData, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({ email, password }, { dispatch, extra: api }) => {
    const {data} = await api.post<LoginData>(APIRoute.Login, { email, password });

    saveToken(data.token);
    dispatch(fetchFavoriteFilmsDataAction());
    dispatch(redirectToRoute(AppRoutes.Main.FullPath));

    return data;
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_, { extra: api }) => {
    await api.delete(APIRoute.Logout);

    dropToken();
  },
);
