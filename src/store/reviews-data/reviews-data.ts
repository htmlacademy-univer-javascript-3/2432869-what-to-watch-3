import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../consts';
import { fetchReviewsDataAction } from '../api-actions';
import { ReviewsDataState } from '../../types/state';

const initialState: ReviewsDataState = {
  reviewsData: [],
};

export const reviewsData = createSlice({
  name: NameSpace.ReviewsData,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchReviewsDataAction.pending, (state) => {
        state.reviewsData = undefined;
      })
      .addCase(fetchReviewsDataAction.fulfilled, (state, action) => {
        state.reviewsData = action.payload;
      })
      .addCase(fetchReviewsDataAction.rejected, (state) => {
        state.reviewsData = [];
      });
  }
});
