import { RefObject, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks';
import { isVideoPlaying } from '../store/video-process/selectors';
import { setVideoPlaying } from '../store/video-process/video-process';

type PlayButtonProps = {
  videoRef: RefObject<HTMLVideoElement>;
};

export default function PlayButton({ videoRef }: PlayButtonProps): JSX.Element {
  const dispatch = useAppDispatch();
  const play = useAppSelector(isVideoPlaying);
  const handlePlayClick = () => dispatch(setVideoPlaying(!play));

  useEffect(() => {
    if (play) {
      videoRef.current?.play();
    } else {
      videoRef.current?.pause();
    }
  }, [play, videoRef]);

  return (
    <button onClick={handlePlayClick} type="button" className="player__play">
      {play
        ?
        <>
          <svg viewBox="0 0 14 21" width="14" height="21">
            <use xlinkHref="#pause"></use>
          </svg>
          <span>Pause</span>
        </>
        :
        <>
          <svg viewBox="0 0 19 19" width="19" height="19">
            <use xlinkHref="#play-s"></use>
          </svg>
          <span>Play</span>
        </>}
    </button>
  );
}
