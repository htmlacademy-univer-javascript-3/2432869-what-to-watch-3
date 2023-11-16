import { createSelector } from '@reduxjs/toolkit';
import { useAppSelector } from '.';
import { Genre } from '../mocks/genres';
import { store } from '../store';
import { State } from '../types/state';
import filterFilmsByGenre from '../shared/filter-films-by-genre';

export const useGenreSelector = () => useAppSelector((state) => state.genre);
export const useFilmsSelector = () => useAppSelector((state) => state.filmsData);

const filmsByGenreSelector = createSelector([
  (state: State) => state.filmsData,
  (_, genre: Genre) => genre,
], (filmsData, genre) => filterFilmsByGenre(filmsData, genre));
export const useFilmsByGenreSelector = (genre: Genre) => filmsByGenreSelector(store.getState(), genre);

export const useFilmSelector = () => useAppSelector((state) => state.filmData);

export const useSimilarFilmsSelector = () => useAppSelector((state) => state.similarFilmsData);

export const usePromoFilmSelector = () => useAppSelector((state) => state.promoFilmData);

export const useFavoriteFilmsSelector = () => useAppSelector((state) => state.favoriteFilmsData);
export const useFavoritesCountSelector = () => useAppSelector((state) => state.favoriteFilmsData.length);

export const useReviewsSelector = () => useAppSelector((state) => state.reviewsData);

export const useAuthStatusSelector = () => useAppSelector((state) => state.authStatus);
