import { Link, generatePath } from 'react-router-dom';
import { AppRoutes } from '../../app-routes';

export type AddReviewLinkProps = {
  filmId: string;
};

export default function AddReviewLink({ filmId }: AddReviewLinkProps): JSX.Element {
  return (
    <Link
      to={generatePath(AppRoutes.FilmReview.FullPath, { id: filmId })}
      className="btn film-card__button"
      data-testid={'add-review-link'}
    >
      Add review
    </Link>
  );
}
