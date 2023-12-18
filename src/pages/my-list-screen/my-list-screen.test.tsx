import { render, screen } from '@testing-library/react';
import { withHistory, withStore } from '../../utils/mock-component';
import { mockFilmsShortData } from '../../mocks/films-short-data';
import MyListScreen from './my-list-screen';
import { AuthStatus } from '../../consts';

describe('Component: MyListScreen', () => {
  const mockFilms = mockFilmsShortData;

  it('renders correctly', () => {
    const preparedComponent = withHistory(<MyListScreen />);
    const { withStoreComponent } = withStore(preparedComponent, {
      FavoriteFilmsData: { favoriteFilmsData: mockFilms, isCurrentFilmFavorite: false },
      User: { authStatus: AuthStatus.Auth },
    });

    render(withStoreComponent);

    expect(screen.getByTestId('logo')).toBeInTheDocument();
    expect(screen.getAllByTestId('small-film-card')).toHaveLength(mockFilms.length);
    expect(screen.getByText(mockFilms.length)).toBeInTheDocument();
    expect(screen.getByText(/catalog/i)).toBeInTheDocument();
    expect(screen.getByText(/©/i)).toBeInTheDocument();
  });
});
