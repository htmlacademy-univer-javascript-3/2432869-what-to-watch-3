import { useNavigate } from 'react-router-dom';
import { AuthStatus, FavoriteStatus } from '../../consts';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { AppRoutes } from '../../app-routes';
import { postFavoriteFilmAction } from '../../store/api-actions';
import { getAuthStatus } from '../../store/user-process/selectors';
import { getFavoriteFilmsCount, isCurrentFilmFavorite } from '../../store/favorite-films-data/selectors';

type AddFavoriteButtonProps = {
  filmId: string;
};

export default function AddFavoriteButton({ filmId }: AddFavoriteButtonProps): JSX.Element {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const favoriteFilmsCount = useAppSelector(getFavoriteFilmsCount);

  const authStatus = useAppSelector(getAuthStatus);
  const isFavorite = useAppSelector(isCurrentFilmFavorite);
  const handleClick = () => {
    if (authStatus !== AuthStatus.Auth) {
      navigate(AppRoutes.Login.FullPath);
      return;
    }

    dispatch(postFavoriteFilmAction({
      filmId: filmId,
      status: isFavorite ? FavoriteStatus.Delete : FavoriteStatus.Set,
    }));
  };

  return (
    <button
      onClick={handleClick}
      className="btn btn--list film-card__button"
      type="button"
      data-testid={'add-favorite-button'}
    >
      {isFavorite
        ?
        <svg viewBox="0 0 18 14" width="18" height="14" data-testid={'in-list-svg'}>
          <use xlinkHref="#in-list"></use>
        </svg>
        :
        <svg viewBox="0 0 19 20" width="19" height="20" data-testid={'add-favorite-svg'}>
          <use xlinkHref="#add"></use>
        </svg>}
      <span>My list</span>
      <span className="film-card__count">{ favoriteFilmsCount }</span>
    </button>
  );
}
