type PlayerProgressProps = {
  totalSeconds: number;
  currentTime: number;
};

export default function PlayerProgress({ totalSeconds, currentTime }: PlayerProgressProps): JSX.Element {
  const progress = 100 * currentTime / totalSeconds;

  return (
    <div className="player__time" data-testid={'player-progress'}>
      <progress className="player__progress" value={progress} max="100"></progress>
      <div className="player__toggler player__toggler-left" style={{'left': `${progress}%`}}>Toggler</div>
    </div>
  );
}
