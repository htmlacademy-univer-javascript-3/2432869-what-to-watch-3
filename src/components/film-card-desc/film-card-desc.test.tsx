import { render, screen } from '@testing-library/react';
import { withHistory, withStore } from '../../utils/mock-component';
import { makeFakeStore } from '../../utils/mocks';
import { AuthStatus } from '../../consts';
import FilmCardDesc from './film-card-desc';
import { mockFilmsData } from '../../mocks/films-data';

describe('Component: FilmCardDesc', () => {
  const filmData = mockFilmsData[4];

  it('renders correctly', () => {
    const withHistoryComponent = withHistory(<FilmCardDesc {...filmData} />);
    const { withStoreComponent } = withStore(withHistoryComponent, makeFakeStore({
      FavoriteFilmsData: { favoriteFilmsData: [], isCurrentFilmFavorite: false },
      User: { authStatus: AuthStatus.Auth },
    }));

    render(withStoreComponent);

    expect(screen.getByTestId('open-player-button')).toBeInTheDocument();
    expect(screen.getByTestId('add-favorite-button')).toBeInTheDocument();
    expect(screen.getByTestId('add-review-link')).toBeInTheDocument();
    expect(screen.getByText(filmData.name)).toBeInTheDocument();
    expect(screen.getByText(filmData.genre)).toBeInTheDocument();
    expect(screen.getByText(filmData.released)).toBeInTheDocument();
  });

  it('hide "AddReviewLink" when user isn`t authorized', () => {
    const withHistoryComponent = withHistory(<FilmCardDesc {...filmData} />);
    const { withStoreComponent } = withStore(withHistoryComponent, makeFakeStore({
      FavoriteFilmsData: { favoriteFilmsData: [], isCurrentFilmFavorite: false },
      User: { authStatus: AuthStatus.NoAuth },
    }));

    render(withStoreComponent);

    expect(screen.queryByTestId('add-review-link')).not.toBeInTheDocument();
  });
});
