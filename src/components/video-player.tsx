import { useRef, useEffect } from 'react';

export type VideoPlayerProps = {
  source: string;
  autoPlay?: boolean;
  play?: boolean;
  muted?: boolean;
  width?: string;
  height?: string;
}

export default function VideoPlayer({ source, autoPlay = true, play = autoPlay,
  muted = false, width = 'auto', height = 'auto' }: VideoPlayerProps): JSX.Element {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (play) {
      videoRef.current?.play();
    } else {
      videoRef.current?.pause();
    }
  }, [play]);

  return (
    <video ref={videoRef} src={source} autoPlay={autoPlay} muted={muted} width={width} height={height}/>
  );
}
