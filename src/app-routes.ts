export const AppRoutes = {
  Main: {
    FullPath: '/',
  },
  Login: {
    FullPath: '/login',
  },
  MyList: {
    FullPath: '/mylist',
  },
  Film: {
    FullPath: '/films/:id',
  },
  FilmReview: {
    FullPath: '/films/:id/review',
    RelativePath: 'review',
  },
  FilmPlayer: {
    FullPath: '/player/:id',
  },
  Error: {
    FullPath: '*'
  },
} as const;
