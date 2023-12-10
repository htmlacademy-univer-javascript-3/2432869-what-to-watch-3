import { render, screen } from '@testing-library/react';
import { withStore } from '../../utils/mock-component';
import { extractActionsTypes } from '../../utils/mocks';
import SignOutButton from './sign-out-button';
import userEvent from '@testing-library/user-event';
import { logoutAction } from '../../store/api-actions';

describe('Component: SignOutButton', () => {
  it('renders correctly', () => {
    const { withStoreComponent } = withStore(<SignOutButton />, {});

    render(withStoreComponent);

    expect(screen.getByTestId('sign-out-button')).toBeInTheDocument();
    expect(screen.getByText(/Sign out/i)).toBeInTheDocument();
  });

  it('dispatch logout action after button click', async () => {
    const { withStoreComponent, mockStore } = withStore(<SignOutButton />, {});

    render(withStoreComponent);
    await userEvent.click(screen.getByRole('button'));
    const actions = extractActionsTypes(mockStore.getActions());

    expect(actions[0]).toEqual(logoutAction.pending.type);
  });
});
