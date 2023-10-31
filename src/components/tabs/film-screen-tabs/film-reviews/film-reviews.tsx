import { FilmReviewData } from '../../../../mocks/film-reviews-data';
import FilmReview from './film-review';

export type FilmReviewsProps = {
  filmReviewsData: ReadonlyArray<FilmReviewData>;
};

export default function FilmReviews({ filmReviewsData }: FilmReviewsProps): JSX.Element {
  const reviewsColumns: JSX.Element[] = [];
  let reviews: JSX.Element[] = [];
  for (let i = 0; i < filmReviewsData.length; i++) {
    reviews.push((
      <FilmReview key={filmReviewsData[i].id} {...filmReviewsData[i]} />
    ));

    if (i % 3 === 2 || i + 1 === filmReviewsData.length) {
      reviewsColumns.push((
        <div key={-filmReviewsData[i].id} className="film-card__reviews-col">
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
