export type FilmGenresData = {
  genre: string;
  additionalClasses?: string;
}

export const filmGenresData: ReadonlyArray<FilmGenresData> = [
  {
    genre: 'All genres',
    additionalClasses: 'catalog__genres-item--active',
  },
  { genre: 'Comedy', },
  { genre: 'Crime', },
  { genre: 'Documentary', },
  { genre: 'Drama', },
  { genre: 'Horror', },
  { genre: 'Kids & Family', },
  { genre: 'Romance', },
  { genre: 'Sci-Fi', },
  { genre: 'Thriller', },
];
