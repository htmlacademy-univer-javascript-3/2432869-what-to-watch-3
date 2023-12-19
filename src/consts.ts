export const MAX_CARDS_COUNT_STEP = 8;
export const CHANGE_IMAGE_TO_VIDEO_TIME = 1000;

export const STANDART_ERROR_MESSAGE = 'An error occured';
export const ALL_GENRES = 'All genres';

export const AuthStatus = {
  Auth: 'Auth',
  NoAuth: 'NoAuth',
  Unknown: 'Unknown',
} as const;

export const APIRoute = {
  Films: 'films',
  Promo: 'promo',
  Favorite: 'favorite',
  Comments: 'comments',
  Login: 'login',
  Logout: 'logout',
} as const;

export const FavoriteStatus = {
  Delete: 0,
  Set: 1,
} as const;

export const NameSpace = {
  Error: 'Error',
  Genre: 'Genre',
  FilmsData: 'FilmsData',
  FavoriteFilmsData: 'FavoriteFilmsData',
  ReviewsData: 'ReviewsData',
  User: 'User',
} as const;

export const ErrorCodesDesc: {[key: number]: string} = {
  400: 'Bad Request',
  401: 'Unauthorized',
  404: 'Not Found',
  408: 'Request Timeout',
  500: 'Internal Server Error',
  502: 'Bad Gateway',
  503: 'Service Unavailable',
  504: 'Gateway Timeout',
} as const;
