import { useAppSelector } from '../../../../hooks';
import { getReviewsData } from '../../../../store/reviews-data/selectors';
import Spinner from '../../../spinner/spinner';
import FilmReview from '../../../film-review/film-review';

export default function FilmReviews(): JSX.Element {
  const reviewsData = useAppSelector(getReviewsData);

  if (!reviewsData) {
    return <Spinner />;
  }

  const reviewsColumns: JSX.Element[] = [];
  let reviews: JSX.Element[] = [];
  for (let i = 0; i < reviewsData.length; i++) {
    reviews.push((
      <FilmReview key={reviewsData[i].id} {...reviewsData[i]} />
    ));

    if (i % 3 === 2 || i + 1 === reviewsData.length) {
      reviewsColumns.push((
        <div key={`column-${reviewsData[i].id}`} className="film-card__reviews-col" data-testid={'reviews-column'}>
          { ...reviews }
        </div>
      ));
      reviews = [];
    }
  }

  return (
    <div className="film-card__reviews film-card__row" data-testid={'film-reviews'}>
      { reviewsColumns }
    </div>
  );
}
