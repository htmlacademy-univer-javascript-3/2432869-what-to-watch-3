import { createReducer } from '@reduxjs/toolkit';
import { filmsData } from '../mocks/films-data';
import { setGenre, changeFilmsByGenre, increaseMaxCardsCount, resetMaxCardsCount } from './action';
import { genres } from '../mocks/genres';

const MAX_CARDS_COUNT_STEP = 8;

const initialState = {
  genre: 'All genres',
  maxCardsCount: MAX_CARDS_COUNT_STEP,
  filmsData,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setGenre, (state, action) => {
      state.genre = action.payload.genre;
    })
    .addCase(changeFilmsByGenre, (state) => {
      const genre = state.genre;

      state.filmsData = genre === genres['All genres']
        ? [...initialState.filmsData]
        : initialState.filmsData.filter((filmData) => filmData.genres.includes(genre));
    })
    .addCase(increaseMaxCardsCount, (state) => {
      state.maxCardsCount += MAX_CARDS_COUNT_STEP;
    })
    .addCase(resetMaxCardsCount, (state) => {
      state.maxCardsCount = MAX_CARDS_COUNT_STEP;
    });
});
