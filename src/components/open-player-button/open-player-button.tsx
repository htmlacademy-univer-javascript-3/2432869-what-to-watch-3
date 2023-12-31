import { generatePath, useNavigate } from 'react-router-dom';
import { AppRoutes } from '../../app-routes';

type OpenPlayerButtonProps = {
  filmId: string;
};

export default function OpenPlayerButton({ filmId }: OpenPlayerButtonProps): JSX.Element {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(generatePath(AppRoutes.FilmPlayer.FullPath, { id: filmId }))}
      className="btn btn--play film-card__button"
      type="button"
      data-testid={'open-player-button'}
    >
      <svg viewBox="0 0 19 19" width="19" height="19">
        <use xlinkHref="#play-s"></use>
      </svg>
      <span>Play</span>
    </button>
  );
}
