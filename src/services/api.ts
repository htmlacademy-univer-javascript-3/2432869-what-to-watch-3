import axios, {AxiosError, AxiosInstance, AxiosRequestConfig} from 'axios';
import { getToken } from './token';
import { DetailMessageType } from '../types/detail-message';
import { store } from '../store';
import { redirectToRoute } from '../store/action';
import { ROUTES } from '../routes';
import { AuthStatus, NameSpace } from '../consts';
import { checkAuthAction } from '../store/api-actions';
import { StatusCodes } from 'http-status-codes';
import { setErrorCode } from '../store/error-process/error-process';

const BACKEND_URL = 'https://13.design.pages.academy/wtw';
const REQUEST_TIMEOUT = 5000;


const useToken = (config: AxiosRequestConfig) => {
  const token = getToken();

  if (token && config.headers) {
    config.headers['x-token'] = token;
  }

  return config;
};

const redirectOnError = (error: AxiosError<DetailMessageType>) => {
  if (error.response && error.response.status !== StatusCodes.UNAUTHORIZED) {
    store.dispatch(setErrorCode(error.response.status));
    store.dispatch(redirectToRoute(ROUTES.error.fullPath));
  }

  throw error;
};

const redirectToLoginOnExpiredToken = (error: AxiosError<DetailMessageType>) => {
  if (error.response?.status === StatusCodes.UNAUTHORIZED
    && store.getState()[NameSpace.User].authStatus === AuthStatus.Auth) {
    store.dispatch(checkAuthAction);
    store.dispatch(redirectToRoute(ROUTES.login.fullPath));
    //store.dispatch(loginAction({ email: ??, password: ?? }));
  }

  throw error;
};


export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
  });

  api.interceptors.request.use(useToken);

  api.interceptors.response.use(
    (response) => response,
    redirectOnError
  );

  api.interceptors.response.use(
    (response) => response,
    redirectToLoginOnExpiredToken
  );

  return api;
};