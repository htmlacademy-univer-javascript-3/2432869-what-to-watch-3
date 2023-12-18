import { ChangeEventHandler, FormEventHandler, useCallback, useState } from 'react';
import { useImmer } from 'use-immer';
import RatingInputs from '../rating-inputs/rating-inputs';
import { useAppDispatch } from '../../hooks';
import { postReviewAction } from '../../store/api-actions';

export type AddReviewFormProps = {
  filmId: string;
  ratingWidth: number;
};

export default function AddReviewForm({ filmId, ratingWidth }: AddReviewFormProps): JSX.Element {
  const dispatch = useAppDispatch();

  const [reviewData, setReviewData] = useImmer({ rating: Math.floor(ratingWidth / 2), comment: '' });
  const [commentError, setCommentError] = useState('');
  const [disabled, setDisabled] = useState(false);

  const handleRatingChange = useCallback((newRating: number) => {
    if (!disabled) {
      setReviewData((prev) => {
        prev.rating = newRating;
      });
    }
  }, [disabled, setReviewData]);

  const handleCommentChange: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    if (!disabled) {
      setReviewData((prev) => {
        prev.comment = e.target.value;
      });
    }
  };

  const handleSubmit: FormEventHandler = (e) => {
    e.preventDefault();
    if (disabled) {
      return;
    }

    if (reviewData.comment.length >= 50 && reviewData.comment.length <= 400) {
      setDisabled(true);
      setCommentError('');
      dispatch(postReviewAction({
        filmId: filmId,
        comment: reviewData.comment,
        rating: reviewData.rating,
      }));
    } else {
      setCommentError('The comment must be at least 50 characters and less than 400 characters');
    }
  };

  return (
    <form action="#" className="add-review__form" onSubmit={handleSubmit}>
      <RatingInputs ratingWidth={ratingWidth} selectedRating={reviewData.rating} onRatingChange={handleRatingChange} />

      <div className="add-review__text">
        <textarea
          onChange={handleCommentChange}
          value={reviewData.comment}
          className="add-review__textarea"
          name="review-text"
          id="review-text"
          placeholder="Review text"
          data-testid={'review-comment-input'}
        />
        <div className="add-review__submit">
          <button className="add-review__btn" type="submit" data-testid={'review-form-submit-button'}>Post</button>
        </div>

      </div>
      <p data-testid={'comment-error'}>{ commentError }</p>
    </form>
  );
}
