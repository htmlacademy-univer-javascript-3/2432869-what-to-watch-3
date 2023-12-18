import { render, screen } from '@testing-library/react';
import { withHistory, withStore } from '../../utils/mock-component';
import { mockFilmsShortData } from '../../mocks/films-short-data';
import { AuthStatus } from '../../consts';
import FilmScreen from './film-screen';
import { mockFilmsData } from '../../mocks/films-data';
import { FilmTabsTitles } from '../../components/tabs/film-screen-tabs/tabs/film-screen-tabs';

describe('Component: FilmScreen', () => {
  const filmData = mockFilmsData[6];
  const similarFilmsData = mockFilmsShortData.slice(4, 9);

  it('renders correctly', () => {
    const preparedComponent = withHistory(<FilmScreen maxSimilarCardsCount={100} />);
    const { withStoreComponent } = withStore(preparedComponent, {
      FilmsData: { filmData: filmData, similarFilmsData: similarFilmsData },
      FavoriteFilmsData: { favoriteFilmsData: mockFilmsShortData, isCurrentFilmFavorite: false },
      User: { authStatus: AuthStatus.Auth },
    });

    render(withStoreComponent);

    expect(screen.getByTestId('logo')).toBeInTheDocument();
    expect(screen.getAllByAltText(filmData.name)).toHaveLength(2);
    expect(screen.getByText(filmData.name)).toBeInTheDocument();
    expect(screen.getAllByTestId('film-tab-button')).toHaveLength(Object.values(FilmTabsTitles).length);
    expect(screen.getByText(/ratings/i)).toBeInTheDocument();
    expect(screen.getByText(/director/i)).toBeInTheDocument();
    expect(screen.getByText(/starring/i)).toBeInTheDocument();
    expect(screen.getByText(/more like this/i)).toBeInTheDocument();
    expect(screen.getAllByTestId('small-film-card')).toHaveLength(similarFilmsData.length);
    expect(screen.getByText(/©/i)).toBeInTheDocument();
  });
});
