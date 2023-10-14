export type FilmGenreLink = {
  genre: string;
  additionalClasses?: string;
}

export const filmGenreLinks: FilmGenreLink[] = [
  {
    genre: 'All genres',
    additionalClasses: 'catalog__genres-item--active',
  },
  { genre: 'Comedies', },
  { genre: 'Crime', },
  { genre: 'Documentary', },
  { genre: 'Dramas', },
  { genre: 'Horror', },
  { genre: 'Kids & Family', },
  { genre: 'Romance', },
  { genre: 'Sci-Fi', },
  { genre: 'Thrillers', },
];
