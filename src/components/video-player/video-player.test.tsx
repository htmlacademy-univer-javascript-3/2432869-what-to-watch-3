import { render, screen } from '@testing-library/react';
import VideoPlayer from './video-player';
import { internet } from 'faker';

describe('Component: VideoPlayer', () => {
  const mockVideoPause = vi.fn();
  HTMLVideoElement.prototype.play = () => new Promise((res) => res());
  HTMLVideoElement.prototype.pause = mockVideoPause;

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders correctly', () => {
    const preparedComponent = <VideoPlayer source={internet.url()} poster={internet.url()} />;
    render(preparedComponent);

    expect(screen.getByTestId('video-player')).toBeInTheDocument();
  });

  it('start video playing when "play" attribute is true', () => {
    const preparedComponent = <VideoPlayer play source={internet.url()} poster={internet.url()} />;
    render(preparedComponent);

    expect(mockVideoPause).not.toBeCalled();
  });

  it('dont start video playing when "play" attribute is false', () => {
    const preparedComponent = <VideoPlayer autoPlay={false} play={false} source={internet.url()} poster={internet.url()} />;
    render(preparedComponent);

    expect(mockVideoPause).toBeCalled();
  });
});
