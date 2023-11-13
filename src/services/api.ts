import axios, {AxiosError, AxiosInstance, AxiosRequestConfig} from 'axios';
import { getToken } from './token';
import { DetailMessageType } from '../types/detail-message';
import { store } from '../store';
import { redirectToRoute } from '../store/action';
import { ROUTES } from '../routes';

const BACKEND_URL = 'https://13.design.pages.academy/wtw';
const REQUEST_TIMEOUT = 5000;

export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
  });

  api.interceptors.request.use((config: AxiosRequestConfig) => {
    const token = getToken();

    if (token && config.headers) {
      config.headers['x-token'] = token;
    }

    return config;
  });

  api.interceptors.response.use(
    (response) => response,
    (error: AxiosError<DetailMessageType>) => {
      if (error.code && error.code !== 'ERR_BAD_REQUEST') {
        store.dispatch(redirectToRoute(ROUTES.notFound.fullPath));
      }

      throw error;
    }
  );

  return api;
};
