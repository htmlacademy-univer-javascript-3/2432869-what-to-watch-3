import { NameSpace } from '../../consts';
import { ReviewData } from '../../types/review-data';
import { State } from '../../types/state';

export const getReviewsData = (state: Pick<State, 'ReviewsData'>): ReviewData[] | undefined => state[NameSpace.ReviewsData].reviewsData;
