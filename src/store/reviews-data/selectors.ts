import { NameSpace } from '../../consts';
import { ReviewData } from '../../types/review-data';
import { State } from '../../types/state';

export const getReviewsData = (state: State): ReviewData[] => state[NameSpace.ReviewsData].reviewsData;
