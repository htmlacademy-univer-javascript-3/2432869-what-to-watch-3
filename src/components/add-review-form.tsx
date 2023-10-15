import { ChangeEvent, FormEvent } from 'react';
import { useImmer } from 'use-immer';
import RatingInputs from './rating-inputs/rating-inputs';

export type AddReviewFormProps = {
  ratingWidth: number;
};

export default function AddReviewForm({ ratingWidth }: AddReviewFormProps): JSX.Element {
  const [reviewData, setReviewData] = useImmer({ rating: 8, comments: '' });

  const handleRatingChange = (newRating: number) => {
    setReviewData((previousValue) => {
      previousValue.rating = newRating;
    });
  };

  const handleCommentsChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setReviewData((previousValue) => {
      previousValue.comments = e.target.value;
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(reviewData);
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
