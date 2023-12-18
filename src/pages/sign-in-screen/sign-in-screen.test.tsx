import { render, screen } from '@testing-library/react';
import { withHistory, withStore } from '../../utils/mock-component';
import SignInScreen from './sign-in-screen';
import { AuthStatus } from '../../consts';

describe('Component: SignInScreen', () => {
  it('renders correctly', () => {
    const withHistoryComponent = withHistory(<SignInScreen />);
    const { withStoreComponent } = withStore(withHistoryComponent, {
      User: { authStatus: AuthStatus.NoAuth }
    });

    render(withStoreComponent);

    expect(screen.getByTestId('logo')).toBeInTheDocument();
    expect(screen.getByText(/email/i)).toBeInTheDocument();
    expect(screen.getByText(/password/i)).toBeInTheDocument();
    expect(screen.getAllByText(/sign in/i)).toHaveLength(2);
    expect(screen.getByText(/©/i)).toBeInTheDocument();
  });
});
