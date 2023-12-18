import { useRef, useEffect } from 'react';

export type VideoPlayerProps = {
  source: string;
  poster: string;
  autoPlay?: boolean;
  play?: boolean;
  muted?: boolean;
  preload?: string;
  width?: string;
  height?: string;
  showPosterAfterPause?: boolean;
}

export default function VideoPlayer({ source, poster, autoPlay = true, play = autoPlay,
  preload = 'none', muted = false, width = 'auto', height = 'auto', showPosterAfterPause = false }: VideoPlayerProps): JSX.Element {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!videoRef.current) {
      return;
    }

    if (play) {
      videoRef.current.play();
    } else {
      if (showPosterAfterPause) {
        videoRef.current.load();
      }
      videoRef.current.pause();
    }
  }, [play, showPosterAfterPause, source]);

  return (
    <video ref={videoRef} src={source} poster={poster} autoPlay={autoPlay} muted={muted}
      preload={preload} width={width} height={height} data-testid={'video-player'}
    />
  );
}
