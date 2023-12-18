import { mockReviewsData } from '../../mocks/reviews-data';
import { ReviewData } from '../../types/review-data';
import { ReviewsDataState } from '../../types/state';
import { fetchReviewsDataAction } from '../api-actions';
import { reviewsData } from './reviews-data';

describe('ReviewsData Slice', () => {
  it('returns initial state with empty action', () => {
    const emptyAction = { type: '' };
    const expectedState = { reviewsData: mockReviewsData };

    const result = reviewsData.reducer(expectedState, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('returns default initial state with empty action', () => {
    const emptyAction = { type: '' };
    const expectedState = { reviewsData: [] };

    const result = reviewsData.reducer(undefined, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('set "undefined" to "reviewsData" with "fetchReviewsDataAction.pending" action', () => {
    const initialState: ReviewsDataState = { reviewsData: mockReviewsData };
    const expectedReviewsData = undefined;

    const result = reviewsData.reducer(initialState, fetchReviewsDataAction.pending);

    expect(result.reviewsData).toEqual(expectedReviewsData);
  });

  it('set reviews data with "fetchReviewsDataAction.fulfilled" action', () => {
    const expectedReviewsData = mockReviewsData;

    const result = reviewsData.reducer(undefined, fetchReviewsDataAction.fulfilled(mockReviewsData, '', ''));

    expect(result.reviewsData).toEqual(expectedReviewsData);
  });

  it('set empty array to "reviewsData" with "fetchReviewsDataAction.rejected" action', () => {
    const expectedReviewsData: ReviewData[] = [];

    const result = reviewsData.reducer(undefined, fetchReviewsDataAction.rejected);

    expect(result.reviewsData).toEqual(expectedReviewsData);
  });
});
