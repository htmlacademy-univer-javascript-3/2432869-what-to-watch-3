import { RefObject, useEffect } from 'react';
import useForceUpdate from '../hooks/use-force-update';
import { TimeoutId } from '../types/timeout-id';
import calculateRemainingTime from '../shared/calculate-remaining-time';
import { useAppSelector } from '../hooks';
import { isVideoPlaying } from '../store/video-process/selectors';

type RemainingTimerProps = {
  totalSeconds: number;
  videoRef: RefObject<HTMLVideoElement>;
};

export default function RemainingTimer({ totalSeconds, videoRef }: RemainingTimerProps): JSX.Element {
  const forceUpdate = useForceUpdate();
  const isCounting = useAppSelector(isVideoPlaying);

  useEffect(() => {
    let id: TimeoutId | undefined = undefined;
    if (isCounting) {
      id = setInterval(() => {
        forceUpdate();
      }, 1000);
    } else if (id) {
      clearInterval(id);
    }

    return () => {
      clearInterval(id);
    };
  }, [forceUpdate, isCounting]);

  return (
    <>
      { calculateRemainingTime(totalSeconds, videoRef.current?.currentTime as number) }
    </>
  );
}
