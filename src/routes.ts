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
    getDynamicPath: (id: number) => `/films/${id}`,
  },
  filmReview: {
    fullPath: '/films/:id/review',
    relativePath: 'review',
    getDynamicPath: (id: number) => `/films/${id}/review`,
  },
  filmPlayer: {
    fullPath: '/player/:id',
    getDynamicPath: (id: number) => `/player/${id}`,
  },
  notFound: {
    fullPath: '*'
  },
};
