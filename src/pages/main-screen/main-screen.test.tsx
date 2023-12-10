import { render, screen } from '@testing-library/react';
import { withHistory, withStore } from '../../utils/mock-component';
import { mockFilmsShortData } from '../../mocks/films-short-data';
import { AuthStatus, Genres, MAX_CARDS_COUNT_STEP } from '../../consts';
import MainScreen from './main-screen';
import { mockPromoFilmData } from '../../mocks/promo-film-data';

describe('Component: SmallFilmCards', () => {
  it('renders correctly', () => {
    const preparedComponent = withHistory(<MainScreen genres={Genres} />);
    const { withStoreComponent } = withStore(preparedComponent, {
      FilmsData: { promoFilmData: mockPromoFilmData, filmsData: mockFilmsShortData },
      FavoriteFilmsData: { favoriteFilmsData: mockFilmsShortData, isCurrentFilmFavorite: false },
      Genre: { genre: Genres['All genres'] },
      User: { authStatus: AuthStatus.Auth },
    });

    render(withStoreComponent);

    expect(screen.getByTestId('logo')).toBeInTheDocument();
    expect(screen.getAllByAltText(mockPromoFilmData.name)).toHaveLength(2);
    expect(screen.getByText(mockPromoFilmData.name)).toBeInTheDocument();
    expect(screen.getByTestId('open-player-button')).toBeInTheDocument();
    expect(screen.getByTestId('add-favorite-button')).toBeInTheDocument();
    expect(screen.getByTestId('add-review-link')).toBeInTheDocument();
    expect(screen.getAllByTestId('genre-button')).toHaveLength(Object.values(Genres).length);
    expect(screen.getByText(/©/i)).toBeInTheDocument();
    setTimeout(() => {
      expect(screen.getAllByTestId('small-film-card')).toHaveLength(MAX_CARDS_COUNT_STEP);
    }, 50);
  });
});
