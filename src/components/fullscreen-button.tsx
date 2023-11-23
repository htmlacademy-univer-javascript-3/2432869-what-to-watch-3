import { RefObject, useEffect, useState } from 'react';

type FullscreenButtonProps = {
  videoRef: RefObject<HTMLVideoElement>;
};

export default function FullscreenButton({ videoRef }: FullscreenButtonProps): JSX.Element {
  const [fullscreen, setFullscreen] = useState(false);
  const handleFullscreenClick = () => setFullscreen((prev) => !prev);

  useEffect(() => {
    if (fullscreen) {
      videoRef.current?.parentElement?.requestFullscreen();
    } else if (document.fullscreenElement) {
      document.exitFullscreen();
    }
  }, [fullscreen, videoRef]);

  return (
    <button onClick={handleFullscreenClick} type="button" className="player__full-screen">
      <svg viewBox="0 0 27 27" width="27" height="27">
        <use xlinkHref="#full-screen"></use>
      </svg>
      <span>Full screen</span>
    </button>
  );
}
