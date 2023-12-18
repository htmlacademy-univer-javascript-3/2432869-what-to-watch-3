import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../consts';
import { fetchFavoriteFilmsDataAction } from '../api-actions';
import { FavoriteFilmsDataState } from '../../types/state';

const initialState: FavoriteFilmsDataState = {
  isCurrentFilmFavorite: false,
  favoriteFilmsData: [],
};

export const favoriteFilmsData = createSlice({
  name: NameSpace.FilmsData,
  initialState,
  reducers: {
    setIsCurrentFilmFavorite: (state, action: PayloadAction<boolean>) => {
      state.isCurrentFilmFavorite = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchFavoriteFilmsDataAction.pending, (state) => {
        state.favoriteFilmsData = undefined;
      })
      .addCase(fetchFavoriteFilmsDataAction.fulfilled, (state, action) => {
        state.favoriteFilmsData = action.payload;
      })
      .addCase(fetchFavoriteFilmsDataAction.rejected, (state) => {
        state.favoriteFilmsData = [];
      });
  }
});

export const {setIsCurrentFilmFavorite} = favoriteFilmsData.actions;
