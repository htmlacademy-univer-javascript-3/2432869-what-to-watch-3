/* eslint-disable @typescript-eslint/no-unused-vars */
import { Link, generatePath } from 'react-router-dom';
import { ROUTES } from '../../routes';
import Screen404 from '../../pages/404-screen/404-screen';

export type SmallFilmCardProps = {
  id: number;
  imageSource: string;
  name: string;
  trailerSource: string;
  hoveredCardId: number | undefined;
  handleMouseEnter: (cardId: number | undefined) => void;
  handleMouseLeave: () => void;
}

export function SmallFilmCard({ id, imageSource, name, trailerSource, hoveredCardId: focusedCardId, handleMouseEnter, handleMouseLeave }: SmallFilmCardProps): JSX.Element {
  if (!focusedCardId) {
    return <Screen404 />;
  }
  return (
    <article className="small-film-card catalog__films-card" onMouseEnter={() => handleMouseEnter(id)} onMouseLeave={handleMouseLeave}>
      <div className="small-film-card__image">
        <video src={trailerSource}></video>
        <img src={imageSource} alt={name} width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <Link to={generatePath(ROUTES.film.fullPath, {id: id})} className="small-film-card__link">{ name }</Link>
      </h3>
    </article>
  );
}
