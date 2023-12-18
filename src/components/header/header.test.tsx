import { render, screen } from '@testing-library/react';
import { withHistory, withStore } from '../../utils/mock-component';
import Header from './header';
import { makeFakeStore } from '../../utils/mocks';
import { AuthStatus } from '../../consts';

describe('Component: Header', () => {
  it('renders logo and user block content when user is authorized', () => {
    const withHistoryComponent = withHistory(<Header />);
    const { withStoreComponent } = withStore(withHistoryComponent, makeFakeStore({
      User: { authStatus: AuthStatus.Auth, avatarUrl: 'img/avatat.jpg' }
    }));

    render(withStoreComponent);

    expect(screen.getByTestId('logo')).toBeInTheDocument();
    expect(screen.getByTestId('user-avatar')).toBeInTheDocument();
    expect(screen.queryByTestId('sign-in-link')).not.toBeInTheDocument();
    expect(screen.queryByRole('h1')).not.toBeInTheDocument();
  });

  it('renders only logo with empty content when user is unknown', () => {
    const withHistoryComponent = withHistory(<Header />);
    const { withStoreComponent } = withStore(withHistoryComponent, makeFakeStore({
      User: { authStatus: AuthStatus.Unknown }
    }));

    render(withStoreComponent);

    expect(screen.getByTestId('logo')).toBeInTheDocument();
    expect(screen.queryByTestId('sign-in-link')).not.toBeInTheDocument();
    expect(screen.queryByTestId('user-avatar')).not.toBeInTheDocument();
    expect(screen.queryByRole('h1')).not.toBeInTheDocument();
  });

  it('renders logo and signin link when user is unauthorized', () => {
    const withHistoryComponent = withHistory(<Header />);
    const { withStoreComponent } = withStore(withHistoryComponent, makeFakeStore({
      User: { authStatus: AuthStatus.NoAuth }
    }));

    render(withStoreComponent);

    expect(screen.getByTestId('logo')).toBeInTheDocument();
    expect(screen.getByTestId('sign-in-link')).toBeInTheDocument();
    expect(screen.queryByTestId('user-avatar')).not.toBeInTheDocument();
    expect(screen.queryByRole('h1')).not.toBeInTheDocument();
  });

  it('renders logo and signin title when user is unauthorized and there is auth screen in prop', () => {
    const withHistoryComponent = withHistory(<Header authScreen />);
    const { withStoreComponent } = withStore(withHistoryComponent, makeFakeStore({
      User: { authStatus: AuthStatus.NoAuth }
    }));

    render(withStoreComponent);

    expect(screen.getByTestId('logo')).toBeInTheDocument();
    expect(screen.getByTestId('sign-in-title')).toBeInTheDocument();
    expect(screen.getByText(/Sign In/i)).toBeInTheDocument();
    expect(screen.queryByTestId('sign-in-link')).not.toBeInTheDocument();
    expect(screen.queryByTestId('user-avatar')).not.toBeInTheDocument();
  });
});
