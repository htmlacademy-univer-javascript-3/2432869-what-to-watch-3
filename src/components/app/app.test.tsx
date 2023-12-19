import { render, screen} from '@testing-library/react';
import { MemoryHistory, createMemoryHistory } from 'history';
import App from './app';
import { withHistory, withStore } from '../../utils/mock-component';
import { AppRoutes } from '../../app-routes';
import { ErrorCodesDesc } from '../../consts';
import { Genres } from "../../mocks/genres";
import { AuthStatus } from '../../consts';
import { mockPromoFilmData } from '../../mocks/promo-film-data';
import { mockFilmsShortData } from '../../mocks/films-short-data';
import { mockFilmsData } from '../../mocks/films-data';

describe('Application Routing', () => {
  let mockHistory: MemoryHistory;

  beforeEach(() => {
    mockHistory = createMemoryHistory();
  });

  it('should render "MainScreen" when user navigate to "/"', () => {
    const withHistoryComponent = withHistory(<App genres={Genres} maxSimilarCardsCount={4} ratingWidth={10} />, mockHistory);
    const { withStoreComponent } = withStore(withHistoryComponent, {
      FilmsData: { promoFilmData: mockPromoFilmData, filmsData: mockFilmsShortData },
      FavoriteFilmsData: { favoriteFilmsData: mockFilmsShortData, isCurrentFilmFavorite: false },
      Genre: { genre: Genres['All genres'] },
      User: { authStatus: AuthStatus.Auth },
    });
    mockHistory.push(AppRoutes.Main.FullPath);

    render(withStoreComponent);

    expect(screen.getAllByAltText(mockPromoFilmData.name)).toHaveLength(2);
    expect(screen.getByText(mockPromoFilmData.name)).toBeInTheDocument();
    expect(screen.getByTestId('open-player-button')).toBeInTheDocument();
    expect(screen.getByTestId('add-favorite-button')).toBeInTheDocument();
    expect(screen.getByTestId('add-review-link')).toBeInTheDocument();
  });

  it('should render "SignInScreen" when user navigate to "/login"', () => {
    const withHistoryComponent = withHistory(<App genres={Genres} maxSimilarCardsCount={4} ratingWidth={10} />, mockHistory);
    const { withStoreComponent } = withStore(withHistoryComponent, {
      User: { authStatus: AuthStatus.NoAuth }
    });
    mockHistory.push(AppRoutes.Login.FullPath);

    render(withStoreComponent);

    expect(screen.getByText(/email/i)).toBeInTheDocument();
    expect(screen.getByText(/password/i)).toBeInTheDocument();
    expect(screen.getAllByText(/sign in/i)).toHaveLength(2);
  });

  it('should render "MyListScreen" when user navigate to "/mylist"', () => {
    const withHistoryComponent = withHistory(<App genres={Genres} maxSimilarCardsCount={4} ratingWidth={10} />, mockHistory);
    const { withStoreComponent } = withStore(withHistoryComponent, {
      FavoriteFilmsData: { favoriteFilmsData: mockFilmsShortData, isCurrentFilmFavorite: false },
      User: { authStatus: AuthStatus.Auth },
    });
    mockHistory.push(AppRoutes.MyList.FullPath);

    render(withStoreComponent);

    expect(screen.getAllByTestId('small-film-card')).toHaveLength(mockFilmsShortData.length);
    expect(screen.getByText(mockFilmsShortData.length)).toBeInTheDocument();
    expect(screen.getByText(/catalog/i)).toBeInTheDocument();
  });

  it('should render "FilmScreen" when user navigate to "/films/:id"', () => {
    const withHistoryComponent = withHistory(<App genres={Genres} maxSimilarCardsCount={4} ratingWidth={10} />, mockHistory);
    const { withStoreComponent } = withStore(withHistoryComponent,{
      FilmsData: { filmData: mockFilmsData[4], similarFilmsData: mockFilmsShortData },
      FavoriteFilmsData: { favoriteFilmsData: mockFilmsShortData, isCurrentFilmFavorite: false },
      User: { authStatus: AuthStatus.Auth },
    });
    mockHistory.push(AppRoutes.Film.FullPath);

    render(withStoreComponent);

    expect(screen.getByText(/ratings/i)).toBeInTheDocument();
    expect(screen.getByText(/director/i)).toBeInTheDocument();
    expect(screen.getByText(/starring/i)).toBeInTheDocument();
    expect(screen.getByText(/more like this/i)).toBeInTheDocument();
  });

  it('should render "AddReviewScreen" when user navigate to "/films/:id/review"', () => {
    const withHistoryComponent = withHistory(<App genres={Genres} maxSimilarCardsCount={4} ratingWidth={10} />, mockHistory);
    const { withStoreComponent } = withStore(withHistoryComponent, {
      FilmsData: { filmData: mockFilmsData[3] },
      User: { authStatus: AuthStatus.Auth },
    });
    mockHistory.push(AppRoutes.FilmReview.FullPath);

    render(withStoreComponent);

    expect(screen.getByTestId('rating-inputs')).toBeInTheDocument();
    expect(screen.getByTestId('review-comment-input')).toBeInTheDocument();
    expect(screen.getByTestId('review-form-submit-button')).toBeInTheDocument();
  });

  it('should render "PlayerScreen" when user navigate to "/player/:id"', () => {
    const withHistoryComponent = withHistory(<App genres={Genres} maxSimilarCardsCount={4} ratingWidth={10} />, mockHistory);
    const { withStoreComponent } = withStore(withHistoryComponent, {
      FilmsData: { filmData: mockFilmsData[7] },
    });
    mockHistory.push(AppRoutes.FilmPlayer.FullPath);

    render(withStoreComponent);

    expect(screen.getByTestId('player-progress')).toBeInTheDocument();
    expect(screen.getByTestId('remaining-timer')).toBeInTheDocument();
    expect(screen.getByTestId('play-button')).toBeInTheDocument();
    expect(screen.getByTestId('fullscreen-button')).toBeInTheDocument();
    expect(screen.getByTestId('player-exit-button')).toBeInTheDocument();
  });

  it('should render "ErrorScreen" when user navigate to non-existent route', () => {
    const errorCode = 404;
    const withHistoryComponent = withHistory(<App genres={Genres} maxSimilarCardsCount={4} ratingWidth={10} />, mockHistory);
    const { withStoreComponent } = withStore(withHistoryComponent, {
      Error: { errorCode: errorCode }
    });
    mockHistory.push('/unknown-route');

    render(withStoreComponent);

    expect(screen.getByText(errorCode)).toBeInTheDocument();
    expect(screen.getByText(ErrorCodesDesc[404])).toBeInTheDocument();
  });
});
