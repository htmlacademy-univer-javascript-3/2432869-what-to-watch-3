import { render, screen } from '@testing-library/react';
import { withHistory, withStore } from '../../utils/mock-component';
import userEvent from '@testing-library/user-event';
import { createMemoryHistory } from 'history';
import { AppRoutes } from '../../app-routes';
import { extractActionsTypes, makeFakeStore } from '../../utils/mocks';
import { AuthStatus } from '../../consts';
import AddFavoriteButton from './add-favorite-button';
import { mockFilmsShortData } from '../../mocks/films-short-data';
import { postFavoriteFilmAction } from '../../store/api-actions';

describe('Component: AddFavoriteButton', () => {
  const filmId = 'dajio892oji';

  it('renders correctly', () => {
    const withHistoryComponent = withHistory(<AddFavoriteButton filmId={filmId} />);
    const { withStoreComponent } = withStore(withHistoryComponent, makeFakeStore({
      FavoriteFilmsData: { favoriteFilmsData: mockFilmsShortData, isCurrentFilmFavorite: false },
      User: { authStatus: AuthStatus.Auth },
    }));

    render(withStoreComponent);

    expect(screen.getByTestId('add-favorite-button')).toBeInTheDocument();
    expect(screen.getByText(/my list/i)).toBeInTheDocument();
    expect(screen.getByText(mockFilmsShortData.length)).toBeInTheDocument();
  });

  it('renders plus symbol when film isn`t favorite', () => {
    const withHistoryComponent = withHistory(<AddFavoriteButton filmId={filmId} />);
    const { withStoreComponent } = withStore(withHistoryComponent, makeFakeStore({
      FavoriteFilmsData: { favoriteFilmsData: [], isCurrentFilmFavorite: false },
      User: { authStatus: AuthStatus.Auth },
    }));

    render(withStoreComponent);

    expect(screen.getByTestId('add-favorite-svg')).toBeInTheDocument();
  });

  it('renders tick symbol when film is favorite', () => {
    const withHistoryComponent = withHistory(<AddFavoriteButton filmId={filmId} />);
    const { withStoreComponent } = withStore(withHistoryComponent, makeFakeStore({
      FavoriteFilmsData: { favoriteFilmsData: [], isCurrentFilmFavorite: true },
      User: { authStatus: AuthStatus.Auth },
    }));

    render(withStoreComponent);

    expect(screen.getByTestId('in-list-svg')).toBeInTheDocument();
  });

  it('redirect to login page when user isn`t authorized and click button', async () => {
    const history = createMemoryHistory();
    const withHistoryComponent = withHistory(<AddFavoriteButton filmId={filmId} />, history);
    const { withStoreComponent } = withStore(withHistoryComponent, makeFakeStore({
      FavoriteFilmsData: { favoriteFilmsData: [], isCurrentFilmFavorite: false },
      User: { authStatus: AuthStatus.NoAuth },
    }));

    render(withStoreComponent);
    await userEvent.click(screen.getByTestId('add-favorite-button'));

    expect(history.location.pathname).toBe(AppRoutes.Login.FullPath);
  });

  it('dispatch "postFavoriteFilmAction" when user is authorized and click button', async () => {
    const withHistoryComponent = withHistory(<AddFavoriteButton filmId={filmId} />);
    const { withStoreComponent, mockStore } = withStore(withHistoryComponent, makeFakeStore({
      FavoriteFilmsData: { favoriteFilmsData: [], isCurrentFilmFavorite: false },
      User: { authStatus: AuthStatus.Auth },
    }));

    render(withStoreComponent);
    await userEvent.click(screen.getByTestId('add-favorite-button'));
    const actions = extractActionsTypes(mockStore.getActions());

    expect(actions[0]).toEqual(postFavoriteFilmAction.pending.type);
  });
});
