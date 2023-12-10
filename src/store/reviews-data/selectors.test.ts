import { NameSpace } from '../../consts';
import { ReviewsDataState } from '../../types/state';
import { getReviewsData } from './selectors';
import { mockReviewsData } from '../../mocks/reviews-data';

describe('ReviewsData selectors', () => {
  it('returns reviews from state', () => {
    const expectedReviewsData = mockReviewsData;
    const state: ReviewsDataState = { reviewsData: expectedReviewsData };

    const result = getReviewsData({ [NameSpace.ReviewsData]: state });

    expect(result).toBe(expectedReviewsData);
  });
});
