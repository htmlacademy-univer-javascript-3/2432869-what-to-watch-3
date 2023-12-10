import { render, screen } from '@testing-library/react';
import PlayButton from './play-button';
import userEvent from '@testing-library/user-event';

describe('Component: PlayButton', () => {
  const handlePlay = vi.fn();
  const handlePause = vi.fn();

  it('renders "play" text when "isPlaying" value is false', () => {
    const component = <PlayButton isPlaying={false} onPlay={handlePlay} onPause={handlePause} />;

    render(component);

    expect(screen.getByTestId('play-button')).toBeInTheDocument();
    expect(screen.getByText(/play/i)).toBeInTheDocument();
  });

  it('renders "pause" text when "isPlaying" value is true', () => {
    const component = <PlayButton isPlaying onPlay={handlePlay} onPause={handlePause} />;

    render(component);

    expect(screen.getByTestId('play-button')).toBeInTheDocument();
    expect(screen.getByText(/pause/i)).toBeInTheDocument();
  });

  it('handle play when user click button', async () => {
    const component = <PlayButton isPlaying={false} onPlay={handlePlay} onPause={handlePause} />;

    render(component);
    await userEvent.click(screen.getByRole('button'));

    expect(handlePlay).toBeCalled();
  });

  it('handle pause when user click button', async () => {
    const component = <PlayButton isPlaying onPlay={handlePlay} onPause={handlePause} />;

    render(component);
    await userEvent.click(screen.getByRole('button'));
    expect(handlePause).toBeCalled();
  });
});
