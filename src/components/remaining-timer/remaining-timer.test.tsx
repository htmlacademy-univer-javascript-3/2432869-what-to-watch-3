import { render, screen } from '@testing-library/react';
import RemainingTimer from './remaining-timer';
import calculateRemainingTime from '../../shared/calculate-remaining-time/calculate-remaining-time';

describe('Component: RemainingTimer', () => {
  it('renders correctly', () => {
    const totalSeconds = 2;
    const currentTime = 1;
    const component = <RemainingTimer totalSeconds={totalSeconds} currentTime={currentTime} />;
    const expectedRemainingTime = calculateRemainingTime(2, 1);

    render(component);

    expect(screen.getByTestId('remaining-timer')).toBeInTheDocument();
    expect(screen.getByText(expectedRemainingTime)).toBeInTheDocument();
  });
});
