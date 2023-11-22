import { PromoFilmData } from '../types/promo-film-data';
import { AuthStatus } from '../consts';
import { useAppSelector } from '../hooks';
import { getAuthStatus } from '../store/user-process/selectors';
import OpenPlayerButton from './open-player-button';
import AddFavoriteButton from './add-favorite-button';
import ToAddReviewButton from './to-add-review-button';

export type FilmCardDescProps = PromoFilmData;

export default function FilmCardDesc({ id, name, genre, released, isFavorite }: FilmCardDescProps): JSX.Element {
  const authStatus = useAppSelector(getAuthStatus);

  return (
    <div className="film-card__desc">
      <h2 className="film-card__title">{ name }</h2>
      <p className="film-card__meta">
        <span className="film-card__genre">{ genre }</span>
        <span className="film-card__year">{ released }</span>
      </p>

      <div className="film-card__buttons">
        <OpenPlayerButton filmId={id} />
        <AddFavoriteButton filmId={id} isFilmFavorite={isFavorite} />
        {authStatus === AuthStatus.Auth &&
          <ToAddReviewButton filmId={id} />}
      </div>
    </div>
  );
}
