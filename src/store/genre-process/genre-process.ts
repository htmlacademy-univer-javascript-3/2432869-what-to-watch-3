import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ALL_GENRES, NameSpace } from '../../consts';
import { Genre } from '../../types/genre';
import { GenreProcessState } from '../../types/state';

const initialState: GenreProcessState = {
  genre: ALL_GENRES,
};

export const genreProcess = createSlice({
  name: NameSpace.Genre,
  initialState,
  reducers: {
    setGenre: (state, action: PayloadAction<Genre>) => {
      state.genre = action.payload;
    },
  },
});

export const {setGenre} = genreProcess.actions;
