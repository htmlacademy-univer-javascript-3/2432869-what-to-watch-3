type PlayButtonProps = {
  isPlaying: boolean;
  onPlay: () => void;
  onPause: () => void;
};

export default function PlayButton({ isPlaying, onPlay: handlePlay, onPause: handlePause }: PlayButtonProps): JSX.Element {
  const handleClick = () => {
    if (isPlaying) {
      handlePause();
    } else {
      handlePlay();
    }
  };

  return (
    <button onClick={handleClick} type="button" className="player__play" data-testid={'play-button'}>
      {isPlaying
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
