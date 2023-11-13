export const ROUTES = {
  main: {
    fullPath: '/',
  },
  login: {
    fullPath: '/login',
  },
  myList: {
    fullPath: '/mylist',
  },
  film: {
    fullPath: '/films/:id',
  },
  filmReview: {
    fullPath: '/films/:id/review',
    relativePath: 'review',
  },
  filmPlayer: {
    fullPath: '/player/:id',
  },
  notFound: {
    fullPath: '*'
  },
} as const;
