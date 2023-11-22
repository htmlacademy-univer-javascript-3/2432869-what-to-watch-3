import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../consts';
import { fetchReviewsDataAction } from '../api-actions';
import { ReviewData } from '../../types/review-data';

type ReviewsDataState = {
  reviewsData: ReviewData[];
};

const initialState: ReviewsDataState = {
  reviewsData: [],
};

export const reviewsData = createSlice({
  name: NameSpace.ReviewsData,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchReviewsDataAction.fulfilled, (state, action) => {
        state.reviewsData = action.payload;
      })
      .addCase(fetchReviewsDataAction.rejected, (state) => {
        state.reviewsData = [];
      });
  }
});
