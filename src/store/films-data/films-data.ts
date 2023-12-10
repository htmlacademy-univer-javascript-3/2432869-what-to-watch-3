import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../consts';
import { fetchFilmDataAction, fetchFilmsDataAction, fetchPromoFilmDataAction, fetchSimilarFilmsDataAction } from '../api-actions';
import { FilmData } from '../../types/film-data';
import { FilmsDataState } from '../../types/state';

const initialState: FilmsDataState = {
  filmData: undefined,
  promoFilmData: undefined,
  filmsData: [],
  similarFilmsData: [],
};

export const filmsData = createSlice({
  name: NameSpace.FilmsData,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchFilmDataAction.pending, (state) => {
        state.filmData = undefined;
      })
      .addCase(fetchFilmDataAction.fulfilled, (state, action) => {
        state.filmData = action.payload as FilmData;
      })
      .addCase(fetchPromoFilmDataAction.pending, (state) => {
        state.promoFilmData = undefined;
      })
      .addCase(fetchPromoFilmDataAction.fulfilled, (state, action) => {
        state.promoFilmData = action.payload;
      })
      .addCase(fetchFilmsDataAction.pending, (state) => {
        state.filmsData = undefined;
      })
      .addCase(fetchFilmsDataAction.fulfilled, (state, action) => {
        state.filmsData = action.payload;
      })
      .addCase(fetchFilmsDataAction.rejected, (state) => {
        state.filmsData = [];
      })
      .addCase(fetchSimilarFilmsDataAction.pending, (state) => {
        state.similarFilmsData = undefined;
      })
      .addCase(fetchSimilarFilmsDataAction.fulfilled, (state, action) => {
        state.similarFilmsData = action.payload;
      })
      .addCase(fetchSimilarFilmsDataAction.rejected, (state) => {
        state.similarFilmsData = [];
      });
  }
});
