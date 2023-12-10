import { Link, generatePath, useNavigate } from 'react-router-dom';
import { AppRoutes } from '../../app-routes';
import VideoPlayer from '../video-player/video-player';
import { useState, useEffect } from 'react';
import { TimeoutId } from '../../types/timeout-id';

export type SmallFilmCardProps = {
  id: string;
  name: string;
  previewImage: string;
  previewVideoLink: string;
  hoveredCardId: string | undefined;
  onMouseEnter: (cardId: string | undefined) => void;
  onMouseLeave: () => void;
}

export function SmallFilmCard({ id, previewImage, name, previewVideoLink, hoveredCardId,
  onMouseEnter: handleMouseEnter, onMouseLeave: handleMouseLeave }: SmallFilmCardProps): JSX.Element {
  const navigate = useNavigate();
  const [playTrailer, setPlayTrailer] = useState(false);

  useEffect(() => {
    let timeoutId: TimeoutId;

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

  const linkPath = generatePath(AppRoutes.Film.FullPath, {id: id});

  return (
    <article
      onMouseEnter={() => handleMouseEnter(id)}
      onMouseLeave={handleMouseLeave}
      className="small-film-card catalog__films-card"
      data-testid={'small-film-card'}
    >
      <div onClick={() => navigate(linkPath)} className="small-film-card__image">
        {playTrailer
          ? <VideoPlayer source={previewVideoLink} play={playTrailer} autoPlay muted preload='auto' width="280" height="175" />
          : <img src={previewImage} alt={name} width="280" height="175" /> }
      </div>
      <h3 className="small-film-card__title">
        <Link to={linkPath} className="small-film-card__link">{ name }</Link>
      </h3>
    </article>
  );
}
