import { useState } from 'react';

type FullscreenButtonProps = {
  onFullscreen: () => Promise<void> | undefined;
};

export default function FullscreenButton({ onFullscreen: handleFullscreen }: FullscreenButtonProps): JSX.Element {
  const [fullscreen, setFullscreen] = useState(false);

  const handleClick = () => {
    if (!fullscreen) {
      handleFullscreen()?.then(() => setFullscreen(true))
        .catch(() => setFullscreen(false));
    } else if (document.fullscreenElement) {
      document.exitFullscreen()
        .then(() => setFullscreen(false))
        .catch(() => setFullscreen(true));
    }
  };

  return (
    <button onClick={handleClick} type="button" className="player__full-screen" data-testid={'fullscreen-button'}>
      <svg viewBox="0 0 27 27" width="27" height="27">
        <use xlinkHref="#full-screen"></use>
      </svg>
      <span>Full screen</span>
    </button>
  );
}
