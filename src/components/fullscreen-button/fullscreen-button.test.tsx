import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import FullscreenButton from './fullscreen-button';

describe('Component: FullscreenButton', () => {
  const handleFullscreen = vi.fn();

  it('renders correctly', () => {
    const component = <FullscreenButton onFullscreen={handleFullscreen} />;

    render(component);

    expect(screen.getByTestId('fullscreen-button')).toBeInTheDocument();
    expect(screen.getByText(/Full screen/i)).toBeInTheDocument();
  });

  it('handle fullscreen when user click button', async () => {
    const component = <FullscreenButton onFullscreen={handleFullscreen} />;

    render(component);
    await userEvent.click(screen.getByRole('button'));

    expect(handleFullscreen).toBeCalled();
  });
});
