import { ValueOf } from '../types/value-of';

export type Genres = typeof genres;

export type Genre = ValueOf<Genres>;

export const genres = {
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
