import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes';

export type SmallFilmCardProps = {
  id: number;
  imageSource: string;
  name: string;
  trailerSource: string;
  focusedCardId: number;
  handleFocus: (cardId: number) => void;
  handleBlur: () => void;
}

export function SmallFilmCard({ id, imageSource, name, trailerSource, focusedCardId, handleFocus, handleBlur }: SmallFilmCardProps): JSX.Element {
  return (
    <article className="small-film-card catalog__films-card" onFocus={() => handleFocus(id)} onBlur={handleBlur}>
      <div className="small-film-card__image">
        <img src={imageSource} alt={name} width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <Link to={ROUTES.film.getDynamicPath(id)} className="small-film-card__link">{ name }</Link>
      </h3>
    </article>
  );
}
