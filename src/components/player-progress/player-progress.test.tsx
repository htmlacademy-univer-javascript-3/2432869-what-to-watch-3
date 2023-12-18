import { render, screen } from '@testing-library/react';
import PlayerProgress from './player-progress';

describe('Component: PlayerProgress', () => {
  it('renders correctly', () => {
    const totalSeconds = 2;
    const currentTime = 1;
    const component = <PlayerProgress totalSeconds={totalSeconds} currentTime={currentTime} />;
    const progress = 100 * currentTime / totalSeconds;

    render(component);

    expect(screen.getByTestId('player-progress')).toBeInTheDocument();
    expect(screen.getByText(/toggler/i)).toBeInTheDocument();
    expect(screen.getByRole('progressbar')).toHaveValue(progress);
  });
});
