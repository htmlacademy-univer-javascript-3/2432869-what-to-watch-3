import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../consts';
import { genreProcess } from './genre-process/genre-process';
import { filmsData } from './films-data/films-data';
import { reviewsData } from './reviews-data/reviews-data';
import { userProcess } from './user-process/user-process';
import { errorProcess } from './error-process/error-process';
import { videoProcess } from './video-process/video-process';

export const rootReducer = combineReducers({
  [NameSpace.Error]: errorProcess.reducer,
  [NameSpace.Genre]: genreProcess.reducer,
  [NameSpace.Video]: videoProcess.reducer,
  [NameSpace.FilmsData]: filmsData.reducer,
  [NameSpace.ReviewsData]: reviewsData.reducer,
  [NameSpace.User]: userProcess.reducer,
});
