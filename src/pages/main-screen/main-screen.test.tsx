import { render, screen } from '@testing-library/react';
import { withHistory, withStore } from '../../utils/mock-component';
import { mockFilmsShortData } from '../../mocks/films-short-data';
import { ALL_GENRES, AuthStatus, MAX_CARDS_COUNT_STEP } from '../../consts';
import MainScreen from './main-screen';
import { mockPromoFilmData } from '../../mocks/promo-film-data';

describe('Component: MainScreen', () => {
  it('renders correctly', () => {
    const preparedComponent = withHistory(<MainScreen />);
    const { withStoreComponent } = withStore(preparedComponent, {
      FilmsData: { promoFilmData: mockPromoFilmData, filmsData: mockFilmsShortData },
      FavoriteFilmsData: { favoriteFilmsData: mockFilmsShortData, isCurrentFilmFavorite: false },
      Genre: { genre: ALL_GENRES },
      User: { authStatus: AuthStatus.Auth },
    });

    render(withStoreComponent);

    expect(screen.getByTestId('logo')).toBeInTheDocument();
    expect(screen.getAllByAltText(mockPromoFilmData.name)).toHaveLength(2);
    expect(screen.getByText(mockPromoFilmData.name)).toBeInTheDocument();
    expect(screen.getByTestId('open-player-button')).toBeInTheDocument();
    expect(screen.getByTestId('add-favorite-button')).toBeInTheDocument();
    expect(screen.getByTestId('add-review-link')).toBeInTheDocument();
    expect(screen.getByText(/©/i)).toBeInTheDocument();
    expect(screen.getAllByTestId('small-film-card')).toHaveLength(MAX_CARDS_COUNT_STEP);
  });
});
