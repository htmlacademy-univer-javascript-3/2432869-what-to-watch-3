import { createSelector } from '@reduxjs/toolkit';
import { useAppSelector } from '..';
import { getFilmsData } from '../../store/films-data/selectors';
import { FilmShortData } from '../../types/film-short-data';

const genresByFilmsSelector = createSelector([
  (filmsData: FilmShortData[]) => filmsData
], (filmsData) => [...new Set(filmsData.map((filmData) => filmData.genre))].sort());

export function useGenresByFilms() {
  const filmsData = useAppSelector(getFilmsData);
  if (!filmsData) {
    return [];
  }
  return filmsData && genresByFilmsSelector(filmsData);
}
