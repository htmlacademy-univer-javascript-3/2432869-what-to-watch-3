import { render, screen } from '@testing-library/react';
import { withHistory } from '../../utils/mock-component';
import SignInLink from './sign-in-link';

describe('Component: SignInLink', () => {
  it('renders correctly', () => {
    const withHistoryComponent = withHistory(<SignInLink />);

    render(withHistoryComponent);

    expect(screen.getByTestId('sign-in-link')).toBeInTheDocument();
    expect(screen.getByText(/sign in/i)).toBeInTheDocument();
  });
});
