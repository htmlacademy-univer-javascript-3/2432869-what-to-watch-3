import { createSelector } from '@reduxjs/toolkit';
import { Genre } from '../mocks/genres';
import { store } from '../store';
import { State } from '../types/state';
import filterFilmsByGenre from '../shared/filter-films-by-genre';
import { NameSpace } from '../consts';

const filmsByGenreSelector = createSelector([
  (state: State, genre: Genre) => ({ filmsData: state[NameSpace.FilmsData].filmsData, genre })
], ({ filmsData, genre }) => filterFilmsByGenre(filmsData, genre));

export const useFilmsByGenre = (genre: Genre) => filmsByGenreSelector(store.getState(), genre);

