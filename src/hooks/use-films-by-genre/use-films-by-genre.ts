import { createSelector } from '@reduxjs/toolkit';
import { Genre } from '../../types/genre';
import filterFilmsByGenre from '../../shared/filter-films-by-genre/filter-films-by-genre';
import { useAppSelector } from '..';
import { getFilmsData } from '../../store/films-data/selectors';
import { FilmShortData } from '../../types/film-short-data';

const filmsByGenreSelector = createSelector([
  (filmsData: FilmShortData[], genre: Genre) => ({ filmsData, genre })
], ({ filmsData, genre }) => filterFilmsByGenre(filmsData, genre));

export function useFilmsByGenre(genre: Genre) {
  const filmsData = useAppSelector(getFilmsData);
  return filmsData && filmsByGenreSelector(filmsData, genre);
}
