import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NameSpace } from '../../consts';
import { Genre } from '../../types/genre';
import { GenreProcessState } from '../../types/state';

const initialState: GenreProcessState = {
  genre: 'All genres',
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
