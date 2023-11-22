import { generatePath, useNavigate } from 'react-router-dom';
import { ROUTES } from '../routes';

type ToAddReviewButtonProps = {
  filmId: string;
};

export default function ToAddReviewButton({ filmId }: ToAddReviewButtonProps): JSX.Element {
  const navigate = useNavigate();

  return (
    <button onClick={() => navigate(generatePath(ROUTES.filmReview.fullPath, { id: filmId }))}
      className="btn film-card__button"
    >
      Add review
    </button>
  );
}
