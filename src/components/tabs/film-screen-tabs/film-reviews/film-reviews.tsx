import FilmReview from './film-review';
import { ReviewData } from '../../../../types/review-data';

export type FilmReviewsProps = {
  reviewsData: ReviewData[];
}

export default function FilmReviews({ reviewsData }: FilmReviewsProps): JSX.Element {
  const reviewsColumns: JSX.Element[] = [];
  let reviews: JSX.Element[] = [];
  for (let i = 0; i < reviewsData.length; i++) {
    reviews.push((
      <FilmReview key={reviewsData[i].id} {...reviewsData[i]} />
    ));

    if (i % 3 === 2 || i + 1 === reviewsData.length) {
      reviewsColumns.push((
        <div key={-reviewsData[i].id} className="film-card__reviews-col">
          { ...reviews }
        </div>
      ));
      reviews = [];
    }
  }

  return (
    <div className="film-card__reviews film-card__row">
      { reviewsColumns }
    </div>
  );
}
