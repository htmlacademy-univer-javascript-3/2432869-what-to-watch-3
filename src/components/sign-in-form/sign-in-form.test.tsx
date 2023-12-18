import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { withStore } from '../../utils/mock-component';
import SignInForm from './sign-in-form';
import { loginAction } from '../../store/api-actions';
import { extractActionsTypes } from '../../utils/mocks';

describe('Component: SignInForm', () => {
  it('renders correctly', () => {
    const { withStoreComponent } = withStore(<SignInForm />, {});

    render(withStoreComponent);

    expect(screen.getByText(/email/i)).toBeInTheDocument();
    expect(screen.getByText(/password/i)).toBeInTheDocument();
    expect(screen.getByText(/sign in/i)).toBeInTheDocument();
  });

  it('validate user uncorrect input, block submit and show error message', async () => {
    const uncorrectEmail = 'user@site';
    const uncorrectPassword = 'onlyletters';
    const { withStoreComponent, mockStore } = withStore(<SignInForm />, {});

    render(withStoreComponent);
    await userEvent.type(screen.getByTestId('sign-in-email-input'), uncorrectEmail);
    await userEvent.type(screen.getByTestId('sign-in-password-input'), uncorrectPassword);
    await userEvent.click(screen.getByTestId('sign-in-form-submit-button'));
    const actions = extractActionsTypes(mockStore.getActions());

    expect(screen.getByDisplayValue(uncorrectEmail)).toBeInTheDocument();
    expect(screen.getByDisplayValue(uncorrectPassword)).toBeInTheDocument();
    expect(screen.getByTestId('sign-in-email-error').textContent?.length).toBeGreaterThan(0);
    expect(screen.getByTestId('sign-in-password-error').textContent?.length).toBeGreaterThan(0);
    expect(actions).toEqual([]);
  });

  it('dispatch "loginAction" when user fill out form with correct data and click submit button', async () => {
    const correctEmail = 'user@site.com';
    const correctPassword = 'lettersand12345';
    const { withStoreComponent, mockStore } = withStore(<SignInForm />, {});

    render(withStoreComponent);
    await userEvent.type(screen.getByTestId('sign-in-email-input'), correctEmail);
    await userEvent.type(screen.getByTestId('sign-in-password-input'), correctPassword);
    await userEvent.click(screen.getByTestId('sign-in-form-submit-button'));
    const actions = extractActionsTypes(mockStore.getActions());

    expect(screen.queryByTestId('sign-in-email-error')).toHaveTextContent('');
    expect(screen.queryByTestId('sign-in-password-error')).toHaveTextContent('');
    expect(actions[0]).toEqual(loginAction.pending.type);
  });
});
