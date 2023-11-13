/* eslint-disable @typescript-eslint/no-unused-vars */
import { Link, generatePath } from 'react-router-dom';
import { ROUTES } from '../../routes';
import VideoPlayer from '../video-player';
import { useState, useEffect } from 'react';

export type SmallFilmCardProps = {
  id: string;
  name: string;
  previewImage: string;
  previewVideoLink: string;
  hoveredCardId: string | undefined;
  handleMouseEnter: (cardId: string | undefined) => void;
  handleMouseLeave: () => void;
}

export function SmallFilmCard({ id, previewImage, name, previewVideoLink, hoveredCardId,
  handleMouseEnter, handleMouseLeave }: SmallFilmCardProps): JSX.Element {
  const [playTrailer, setPlayTrailer] = useState(false);

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;

    if (id === hoveredCardId) {
      timeoutId = setTimeout(() => {
        setPlayTrailer(true);
      }, 1000);
    } else {
      setPlayTrailer(false);
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [id, hoveredCardId]);

  return (
    <article className="small-film-card catalog__films-card" onMouseEnter={() => handleMouseEnter(id)} onMouseLeave={handleMouseLeave}>
      <div className="small-film-card__image">
        { playTrailer
          ? <VideoPlayer source={previewVideoLink} play={playTrailer} autoPlay muted preload='auto' width="280" height="175" />
          : <img src={previewImage} alt={name} width="280" height="175" /> }
      </div>
      <h3 className="small-film-card__title">
        <Link to={generatePath(ROUTES.film.fullPath, {id: id})} className="small-film-card__link">{ name }</Link>
      </h3>
    </article>
  );
}
