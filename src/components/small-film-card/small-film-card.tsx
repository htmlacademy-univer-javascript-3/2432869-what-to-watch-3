import { Link, generatePath, useNavigate } from 'react-router-dom';
import { AppRoutes } from '../../app-routes';
import VideoPlayer from '../video-player/video-player';
import { useState, useEffect } from 'react';
import { TimeoutId } from '../../types/timeout-id';
import { CHANGE_IMAGE_TO_VIDEO_TIME } from '../../consts';

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
      }, CHANGE_IMAGE_TO_VIDEO_TIME);
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
        <VideoPlayer source={previewVideoLink} poster={previewImage} play={playTrailer}
          autoPlay muted preload='auto' width="280" height="175" showPosterAfterPause
        />
      </div>
      <h3 className="small-film-card__title">
        <Link to={linkPath} className="small-film-card__link">{ name }</Link>
      </h3>
    </article>
  );
}
