import { useNavigate } from 'react-router-dom';
import { AuthStatus, FavoriteStatus } from '../consts';
import { useAppDispatch, useAppSelector } from '../hooks';
import { ROUTES } from '../routes';
import { postFavoriteFilmAction } from '../store/api-actions';
import { getFavoriteFilmsCount } from '../store/films-data/selectors';
import { getAuthStatus } from '../store/user-process/selectors';
import { useState } from 'react';

type AddFavoriteButtonProps = {
  filmId: string;
  isFilmFavorite?: boolean;
};

export default function AddFavoriteButton({ filmId, isFilmFavorite = false }: AddFavoriteButtonProps): JSX.Element {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const favoriteFilmsCount = useAppSelector(getFavoriteFilmsCount);

  const [isFavorite, setIsFavorite] = useState(isFilmFavorite);
  const authStatus = useAppSelector(getAuthStatus);
  const handleClick = () => {
    if (authStatus !== AuthStatus.Auth) {
      navigate(ROUTES.login.fullPath);
      return;
    }

    dispatch(postFavoriteFilmAction({
      filmId: filmId,
      status: isFavorite ? FavoriteStatus.Delete : FavoriteStatus.Set,
    }));

    setIsFavorite((prev) => !prev);
  };

  return (
    <button onClick={handleClick}
      className="btn btn--list film-card__button" type="button"
    >
      {isFavorite
        ?
        <svg viewBox="0 0 18 14" width="18" height="14">
          <use xlinkHref="#in-list"></use>
        </svg>
        :
        <svg viewBox="0 0 19 20" width="19" height="20">
          <use xlinkHref="#add"></use>
        </svg>}
      <span>My list</span>
      <span className="film-card__count">{ favoriteFilmsCount }</span>
    </button>
  );
}
