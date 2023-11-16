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

export const Status = {
  Set: 1,
  Delete: 0,
} as const;
