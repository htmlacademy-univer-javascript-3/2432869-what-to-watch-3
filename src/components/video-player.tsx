import { useRef, useEffect } from 'react';

export type VideoPlayerProps = {
  source: string;
  autoPlay?: boolean;
  play?: boolean;
  muted?: boolean;
  preload?: string;
  width?: string;
  height?: string;
}

export default function VideoPlayer({ source, autoPlay = true, play = autoPlay,
  preload = 'none', muted = false, width = 'auto', height = 'auto' }: VideoPlayerProps): JSX.Element {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (play) {
      videoRef.current?.play();
    } else {
      videoRef.current?.pause();
    }
  }, [play]);

  return (
    <video ref={videoRef} src={source} autoPlay={autoPlay} muted={muted}
      preload={preload} width={width} height={height}
    />
  );
}
