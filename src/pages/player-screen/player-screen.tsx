import './player-screen.css';
import useFilmByParamId from '../../hooks/use-film-by-param-id';
import Spinner from '../../components/spinner/spinner';
import { generatePath, useNavigate } from 'react-router-dom';
import { ROUTES } from '../../routes';
import { useRef } from 'react';
import RemainingTimer from '../../components/remaining-timer';
import PlayButton from '../../components/play-button';
import FullscreenButton from '../../components/fullscreen-button';

export default function PlayerScreen(): JSX.Element {
  const navigate = useNavigate();
  const videoRef = useRef<HTMLVideoElement>(null);

  const filmData = useFilmByParamId();

  return (
    <div className="player">
      {filmData
        ?
        <>
          <video
            ref={videoRef}
            src={filmData.videoLink}
            poster={filmData.backgroundImage}
            className="player__video"
            muted={false}
          >
          </video>

          <button onClick={() => navigate(generatePath(ROUTES.film.fullPath, { id: filmData.id }))}
            type="button" className="player__exit"
          >
            Exit
          </button>

          <div className="player__controls">
            <div className="player__controls-row">
              <div className="player__time">
                <progress className="player__progress" value="30" max="100"></progress>
                <div className="player__toggler player__toggler-left">Toggler</div>
              </div>
              <div className="player__time-value">
                <RemainingTimer totalSeconds={filmData.runTime * 60} videoRef={videoRef} />
              </div>
            </div>

            <div className="player__controls-row">
              <PlayButton videoRef={videoRef} />
              <div className="player__name">Transpotting</div>

              <FullscreenButton videoRef={videoRef} />
            </div>
          </div>
        </>
        : <Spinner />}
    </div>
  );
}
