import { render, screen } from '@testing-library/react';
import { withHistory, withStore } from '../../utils/mock-component';
import userEvent from '@testing-library/user-event';
import { createMemoryHistory } from 'history';
import { AppRoutes } from '../../app-routes';
import { SmallFilmCard } from './small-film-card';
import { mockFilmsShortData } from '../../mocks/films-short-data';
import { generatePath } from 'react-router-dom';

describe('Component: SmallFilmCard', () => {
  const onMouseEnter = vi.fn();
  const onMouseLeave = vi.fn();

  const mockFilm = mockFilmsShortData[8];
  const filmId = mockFilm.id;
  const history = createMemoryHistory();

  let withStoreComponent: JSX.Element;

  beforeEach(() => {
    const preparedComponent = withHistory(
      <SmallFilmCard {...mockFilm} hoveredCardId={undefined}
        onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}
      />, history);
    withStoreComponent = withStore(preparedComponent, {}).withStoreComponent;
  });

  it('renders correctly', () => {
    render(withStoreComponent);

    expect(screen.getByTestId('small-film-card')).toBeInTheDocument();
    expect(screen.getByText(mockFilm.name)).toBeInTheDocument();
  });

  it('redirect to film page with same id when user click card', async () => {
    render(withStoreComponent);
    await userEvent.click(screen.getByRole('link'));

    expect(history.location.pathname).toBe(generatePath(AppRoutes.Film.FullPath, { id: filmId }));
  });
});
