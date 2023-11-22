import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../consts';
import { fetchFavoriteFilmsDataAction, fetchFilmDataAction, fetchFilmsDataAction, fetchPromoFilmDataAction, fetchSimilarFilmsDataAction } from '../api-actions';
import { FilmData } from '../../types/film-data';
import { PromoFilmData } from '../../types/promo-film-data';
import { ShortFilmData } from '../../types/short-film-data';

type FilmsDataState = {
  filmData?: FilmData;
  promoFilmData?: PromoFilmData;
  filmsData: ShortFilmData[];
  similarFilmsData: ShortFilmData[];
  favoriteFilmsData: ShortFilmData[];
};

const initialState: FilmsDataState = {
  filmData: undefined,
  promoFilmData: undefined,
  filmsData: [],
  similarFilmsData: [],
  favoriteFilmsData: [],
};

export const filmsData = createSlice({
  name: NameSpace.FilmsData,
  initialState,
  reducers: {
    clearFilmData: (state) => {
      state.filmData = undefined;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchFilmDataAction.fulfilled, (state, action) => {
        state.filmData = action.payload as FilmData;
      })
      .addCase(fetchFilmDataAction.rejected, (state) => {
        state.filmData = undefined;
      })
      .addCase(fetchPromoFilmDataAction.fulfilled, (state, action) => {
        state.promoFilmData = action.payload;
      })
      .addCase(fetchPromoFilmDataAction.rejected, (state) => {
        state.promoFilmData = undefined;
      })
      .addCase(fetchFilmsDataAction.fulfilled, (state, action) => {
        state.filmsData = action.payload;
      })
      .addCase(fetchFilmsDataAction.rejected, (state) => {
        state.filmsData = [];
      })
      .addCase(fetchSimilarFilmsDataAction.fulfilled, (state, action) => {
        state.similarFilmsData = action.payload;
      })
      .addCase(fetchSimilarFilmsDataAction.rejected, (state) => {
        state.similarFilmsData = [];
      })
      .addCase(fetchFavoriteFilmsDataAction.fulfilled, (state, action) => {
        state.favoriteFilmsData = action.payload;
      })
      .addCase(fetchFavoriteFilmsDataAction.rejected, (state) => {
        state.favoriteFilmsData = [];
      });
  }
});

export const {clearFilmData} = filmsData.actions;
