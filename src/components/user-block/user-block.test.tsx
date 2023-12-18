import { render, screen } from '@testing-library/react';
import { withHistory, withStore } from '../../utils/mock-component';
import UserBlock from './user-block';
import userEvent from '@testing-library/user-event';
import { createMemoryHistory } from 'history';
import { AppRoutes } from '../../app-routes';
import { makeFakeStore } from '../../utils/mocks';
import { AuthStatus } from '../../consts';

describe('Component: UserBlock', () => {
  it('renders correctly', () => {
    const withHistoryComponent = withHistory(<UserBlock />);
    const { withStoreComponent } = withStore(withHistoryComponent, makeFakeStore({
      User: { avatarUrl: 'img/avatar.jpg', authStatus: AuthStatus.Auth }
    }));

    render(withStoreComponent);

    expect(screen.getByTestId('user-avatar')).toBeInTheDocument();
    expect(screen.getByTestId('sign-out-button')).toBeInTheDocument();
  });

  it('redirect to favorites list when user click avatar', async () => {
    const history = createMemoryHistory();
    const withHistoryComponent = withHistory(<UserBlock />, history);
    const { withStoreComponent } = withStore(withHistoryComponent, makeFakeStore({
      User: { avatarUrl: 'img/avatar.jpg', authStatus: AuthStatus.Auth }
    }));

    render(withStoreComponent);
    await userEvent.click(screen.getByTestId('user-avatar'));

    expect(history.location.pathname).toBe(AppRoutes.MyList.FullPath);
  });
});
