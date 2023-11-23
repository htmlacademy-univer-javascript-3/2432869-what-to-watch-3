export const MAX_CARDS_COUNT_STEP = 8;

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
  Set: 1,
  Delete: 0,
} as const;

export const NameSpace = {
  Error: 'Error',
  Genre: 'Genre',
  Video: 'Video',
  FilmsData: 'FilmsData',
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
