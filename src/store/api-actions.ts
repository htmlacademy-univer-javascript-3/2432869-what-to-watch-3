import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { AppDispatch, State } from '../types/state';
import { APIRoute, AuthStatus } from '../consts';
import { FilmData } from '../types/film-data';
import { ReviewData } from '../types/review-data';
import { PromoFilmData } from '../types/promo-film-data';
import { ShortFilmData } from '../types/short-film-data';
import { loadFavoriteFilms, loadFilm, loadFilms, loadPromoFilm, loadReviews, loadSimilarFilms, redirectToRoute, setAuth } from './action';
import { Status } from '../types/status';
import { SetReviewData } from '../types/short-review-data';
import { AuthData } from '../types/auth-data';
import { UserData } from '../types/user-data';
import { saveToken, dropToken } from '../services/token';
import { ROUTES } from '../routes';

export const fetchFilmsDataAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchFilms',
  async (_, { dispatch, extra: api }) => {
    const {data} = await api.get<ShortFilmData[]>(APIRoute.Films);
    dispatch(loadFilms(data));
  },
);

export const fetchFilmDataAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchFilm',
  async (id, { dispatch, extra: api }) => {
    try {
      const {data} = await api.get<FilmData>(`${APIRoute.Films}/${id}`);
      dispatch(loadFilm(data));
    } catch {
      dispatch(redirectToRoute(ROUTES.notFound.fullPath));
    }
  },
);

export const fetchSimilarFilmsDataAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchSimilarFilms',
  async (id, { dispatch, extra: api }) => {
    try {
      const {data} = await api.get<ShortFilmData[]>(`${APIRoute.Films}/${id}/similar`);
      dispatch(loadSimilarFilms(data));
    } catch {
      dispatch(redirectToRoute(ROUTES.notFound.fullPath));
    }
  },
);

export const fetchPromoFilmDataAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchPromoFilm',
  async (_, { dispatch, extra: api }) => {
    const {data} = await api.get<PromoFilmData>(`${APIRoute.Promo}`);
    dispatch(loadPromoFilm(data));
  },
);

export const fetchFavoriteFilmsDataAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchFavoriteFilms',
  async (_, { dispatch, extra: api }) => {
    const {data} = await api.get<ShortFilmData[]>(APIRoute.Favorite);
    dispatch(loadFavoriteFilms(data));
  },
);

export const postFavoriteFilmAction = createAsyncThunk<void, {
  filmId: string;
  status: Status;
}, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/postFavoriteFilm',
  async ({ filmId, status }, { dispatch, extra: api }) => {
    const {data} = await api.post<FilmData>(`${APIRoute.Favorite}/${filmId}/${status}`);
    dispatch((loadFilm(data)));
  },
);

export const fetchReviewsDataAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchReviews',
  async (filmId, { dispatch, extra: api }) => {
    try {
      const {data} = await api.get<ReviewData[]>(`${APIRoute.Comments}/${filmId}`);
      dispatch(loadReviews(data));
    } catch {
      dispatch(redirectToRoute(ROUTES.notFound.fullPath));
    }
  },
);

export const postReviewAction = createAsyncThunk<void, SetReviewData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/postReview',
  async ({ filmId, comment, rating }, { dispatch, extra: api }) => {
    await api.post<ReviewData>(`${APIRoute.Comments}/${filmId}`, { comment, rating });
    dispatch(redirectToRoute(ROUTES.main.fullPath));
    // dispatch(redirectToRoute(generatePath(ROUTES.film.fullPath, { id: filmId })));
  },
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_, {dispatch, extra: api}) => {
    try {
      await api.get(APIRoute.Login);
      dispatch(setAuth(AuthStatus.Auth));
    } catch {
      dispatch(setAuth(AuthStatus.NoAuth));
    }
  },
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({ email, password }, {dispatch, extra: api}) => {
    const {data} = await api.post<UserData>(APIRoute.Login, { email, password });
    saveToken(data.token);
    dispatch(setAuth(AuthStatus.Auth));
    dispatch(redirectToRoute(ROUTES.main.fullPath));
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_, {dispatch, extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(setAuth(AuthStatus.NoAuth));
    dispatch(redirectToRoute(ROUTES.login.fullPath));
  },
);
