import { render, screen } from '@testing-library/react';
import VideoPlayer from './video-player';
import { internet } from 'faker';

describe('Component: Copyright', () => {
  const mockVideoPlay = vi.fn();
  const mockVideoPause = vi.fn();
  HTMLVideoElement.prototype.play = mockVideoPlay;
  HTMLVideoElement.prototype.pause = mockVideoPause;

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders correctly', () => {
    const preparedComponent = <VideoPlayer source={internet.url()} />;
    render(preparedComponent);

    expect(screen.getByTestId('video-player')).toBeInTheDocument();
  });

  it('start video playing when "play" attribute is true', () => {
    const preparedComponent = <VideoPlayer play source={internet.url()} />;
    render(preparedComponent);

    expect(mockVideoPlay).toBeCalled();
    expect(mockVideoPause).not.toBeCalled();
  });

  it('dont start video playing when "play" attribute is false', () => {
    const preparedComponent = <VideoPlayer autoPlay={false} play={false} source={internet.url()} />;
    render(preparedComponent);

    expect(mockVideoPlay).not.toBeCalled();
    expect(mockVideoPause).toBeCalled();
  });
});
