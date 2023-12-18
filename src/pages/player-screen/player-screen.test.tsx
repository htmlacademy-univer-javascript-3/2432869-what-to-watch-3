import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { withHistory, withStore } from '../../utils/mock-component';
import PlayerScreen from './player-screen';
import { createMemoryHistory } from 'history';
import { generatePath } from 'react-router-dom';
import { AppRoutes } from '../../app-routes';
import { mockFilmsData } from '../../mocks/films-data';

describe('Component: PlayerScreen', () => {
  const mockVideoPause = vi.fn();
  HTMLVideoElement.prototype.play = () => new Promise((res) => res());
  HTMLVideoElement.prototype.pause = mockVideoPause;

  const mockFilm = mockFilmsData[10];
  const filmId = mockFilm.id;
  const history = createMemoryHistory();

  let withStoreComponent: JSX.Element;
  beforeEach(() => {
    const preparedComponent = withHistory(<PlayerScreen />, history);
    withStoreComponent = withStore(preparedComponent, {
      FilmsData: { filmData: mockFilm },
    }).withStoreComponent;
  });

  it('renders correctly', () => {
    render(withStoreComponent);

    expect(screen.getByTestId('player-progress')).toBeInTheDocument();
    expect(screen.getByTestId('remaining-timer')).toBeInTheDocument();
    expect(screen.getByTestId('play-button')).toBeInTheDocument();
    expect(screen.getByTestId('fullscreen-button')).toBeInTheDocument();
    expect(screen.getByTestId('player-exit-button')).toBeInTheDocument();
  });

  it('redirects to film page with same id when user click exit button', async () => {
    render(withStoreComponent);
    await userEvent.click(screen.getByTestId('player-exit-button'));

    expect(history.location.pathname).toBe(generatePath(AppRoutes.Film.FullPath, { id: filmId }));
  });

  it('start and stop video playing when user click play button', async () => {
    render(withStoreComponent);
    await userEvent.click(screen.getByTestId('play-button'));

    expect(mockVideoPause).not.toBeCalled();
  });
});
