import { render, screen } from '@testing-library/react';
import { withHistory } from '../../utils/mock-component';
import OpenPlayerButton from './open-player-button';
import userEvent from '@testing-library/user-event';
import { createMemoryHistory } from 'history';
import { AppRoutes } from '../../app-routes';
import { generatePath } from 'react-router-dom';

describe('Component: OpenPlayerButton', () => {
  it('renders correctly', () => {
    const withHistoryComponent = withHistory(<OpenPlayerButton filmId={'0'} />);

    render(withHistoryComponent);

    expect(screen.getByTestId('open-player-button')).toBeInTheDocument();
    expect(screen.getByText(/Play/i)).toBeInTheDocument();
  });

  it('redirect to film player when user click button', async () => {
    const filmId = 'dsa560';
    const history = createMemoryHistory();
    const withHistoryComponent = withHistory(<OpenPlayerButton filmId={filmId} />, history);

    render(withHistoryComponent);
    await userEvent.click(screen.getByRole('button'));

    expect(history.location.pathname).toBe(generatePath(AppRoutes.FilmPlayer.FullPath, { id: filmId }));
  });
});
