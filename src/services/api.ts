import axios, {AxiosError, AxiosInstance, AxiosRequestConfig} from 'axios';
import { dropToken, getToken } from './token';
import { DetailMessageType } from '../types/detail-message';
import { StatusCodes } from 'http-status-codes';

const BACKEND_URL = 'https://13.design.pages.academy/wtw';
const REQUEST_TIMEOUT = 5000;

const useToken = (config: AxiosRequestConfig) => {
  const token = getToken();

  if (token && config.headers) {
    config.headers['x-token'] = token;
  }

  return config;
};

const redirectToLoginOnExpiredToken = (error: AxiosError<DetailMessageType>) => {
  if (error.response?.status === StatusCodes.UNAUTHORIZED && getToken() !== '') {
    dropToken();
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
    redirectToLoginOnExpiredToken
  );

  return api;
};
