import './player-screen.css';
import useFilmByParamId from '../../hooks/use-film-by-param-id/use-film-by-param-id';
import Spinner from '../../components/spinner/spinner';
import { generatePath, useNavigate } from 'react-router-dom';
import { AppRoutes } from '../../app-routes';
import { useCallback, useEffect, useRef, useState } from 'react';
import RemainingTimer from '../../components/remaining-timer/remaining-timer';
import PlayButton from '../../components/play-button/play-button';
import FullscreenButton from '../../components/fullscreen-button/fullscreen-button';
import PlayerProgress from '../../components/player-progress/player-progress';
import { TimeoutId } from '../../types/timeout-id';

export default function PlayerScreen(): JSX.Element {
  const navigate = useNavigate();
  const playerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const filmData = useFilmByParamId();

  const [isPlaying, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);

  const handlePlayButtonClick = useCallback(() => {
    videoRef.current?.play()
      .then(() => setPlaying(true));
  }, []);
  const handlePauseButtonClick = useCallback(() => {
    videoRef.current?.pause();
    setPlaying(false);
  }, []);
  const handleFullscreenButtonClick = useCallback(() => playerRef.current?.requestFullscreen(), []);

  useEffect(() => {
    let id: TimeoutId | undefined = undefined;
    if (isPlaying) {
      id = setInterval(() => setCurrentTime(videoRef.current?.currentTime ?? 0), 500);
    } else {
      clearInterval(id);
      setCurrentTime(videoRef.current?.currentTime ?? 0);
    }

    return () => {
      clearInterval(id);
    };
  }, [isPlaying]);

  return (
    <div ref={playerRef} className="player">
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

          <button
            onClick={() => navigate(generatePath(AppRoutes.Film.FullPath, { id: filmData.id }))}
            type="button"
            className="player__exit"
            data-testid={'player-exit-button'}
          >
            Exit
          </button>

          <div className="player__controls">
            <div className="player__controls-row">
              <PlayerProgress totalSeconds={videoRef.current?.duration || 0.1} currentTime={currentTime} />
              <div className="player__time-value">
                <RemainingTimer totalSeconds={videoRef.current?.duration || 0.1} currentTime={currentTime} />
              </div>
            </div>

            <div className="player__controls-row">
              <PlayButton isPlaying={isPlaying} onPlay={handlePlayButtonClick} onPause={handlePauseButtonClick} />
              <div className="player__name">Transpotting</div>

              <FullscreenButton onFullscreen={handleFullscreenButtonClick} />
            </div>
          </div>
        </>
        : <Spinner />}
    </div>
  );
}
