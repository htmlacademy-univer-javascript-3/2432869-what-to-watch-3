export const MAX_CARDS_COUNT_STEP = 8;

export const STANDART_ERROR_MESSAGE = 'An error occured';

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

export const Genres = {
  'All genres': 'All genres',
  Comedy: 'Comedy',
  Crime: 'Crime',
  Documentary: 'Documentary',
  Drama: 'Drama',
  Horror: 'Horror',
  'Kids & Family': 'Kids & Family',
  Romance: 'Romance',
  'Sci-Fi': 'Sci-Fi',
  Thriller: 'Thriller',
} as const;
