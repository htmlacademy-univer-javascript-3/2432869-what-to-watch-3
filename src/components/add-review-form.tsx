import { ChangeEventHandler, FormEventHandler, useCallback, useState } from 'react';
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

  const [reviewData, setReviewData] = useImmer({ rating: 8, comment: '' });
  const [commentError, setCommentError] = useState('');

  const handleRatingChange = useCallback((newRating: number) => {
    setReviewData((prev) => {
      prev.rating = newRating;
    });
  }, [setReviewData]);

  const handleCommentChange: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    setReviewData((prev) => {
      prev.comment = e.target.value;
    });
  };

  const handleSubmit: FormEventHandler = (e) => {
    e.preventDefault();
    if (reviewData.comment.length >= 50) {
      setCommentError('');
      dispatch(postReviewAction({
        filmId: filmId,
        comment: reviewData.comment,
        rating: reviewData.rating,
      }));
    } else {
      setCommentError('The comment must be at least 50 characters');
    }
  };

  return (
    <form action="#" className="add-review__form" onSubmit={handleSubmit}>
      <RatingInputs ratingWidth={ratingWidth} selectedRating={reviewData.rating} handleRatingChange={handleRatingChange} />

      <div className="add-review__text">
        <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text"
          onChange={handleCommentChange}
          value={reviewData.comment}
        />
        {commentError}
        <div className="add-review__submit">
          <button className="add-review__btn" type="submit">Post</button>
        </div>

      </div>
    </form>
  );
}
