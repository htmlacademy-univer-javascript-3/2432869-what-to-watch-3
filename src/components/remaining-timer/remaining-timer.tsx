import calculateRemainingTime from '../../shared/calculate-remaining-time/calculate-remaining-time';

type RemainingTimerProps = {
  totalSeconds: number;
  currentTime: number;
};

export default function RemainingTimer({ totalSeconds, currentTime }: RemainingTimerProps): JSX.Element {
  return (
    <span data-testid={'remaining-timer'}>
      { calculateRemainingTime(totalSeconds, currentTime) }
    </span>
  );
}
