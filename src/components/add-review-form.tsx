import { ChangeEventHandler, FormEventHandler } from 'react';
import { useImmer } from 'use-immer';
import RatingInputs from './rating-inputs/rating-inputs';
import { useAppDispatch } from '../hooks';
import { postReviewAction } from '../store/api-actions';

export type AddReviewFormProps = {
  filmId: string;
  ratingWidth: number;
};

export default function AddReviewForm({ filmId, ratingWidth }: AddReviewFormProps): JSX.Element {
  const dispatch = useAppDispatch();
  const [reviewData, setReviewData] = useImmer({ rating: 8, comments: '' });

  const handleRatingChange = (newRating: number) => {
    setReviewData((previousValue) => {
      previousValue.rating = newRating;
    });
  };

  const handleCommentsChange: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    setReviewData((previousValue) => {
      previousValue.comments = e.target.value;
    });
  };

  const handleSubmit: FormEventHandler = (e) => {
    e.preventDefault();
    dispatch(postReviewAction({
      filmId: filmId,
      comment: reviewData.comments,
      rating: reviewData.rating,
    }));
  };

  return (
    <form action="#" className="add-review__form" onSubmit={handleSubmit}>
      <RatingInputs ratingWidth={ratingWidth} selectedRating={reviewData.rating} handleRatingChange={handleRatingChange} />

      <div className="add-review__text">
        <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text"
          onChange={handleCommentsChange}
          value={reviewData.comments}
        />
        <div className="add-review__submit">
          <button className="add-review__btn" type="submit">Post</button>
        </div>

      </div>
    </form>
  );
}
