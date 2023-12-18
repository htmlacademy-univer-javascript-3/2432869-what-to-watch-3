import { FormEventHandler } from 'react';
import { useAppDispatch } from '../../hooks';
import { loginAction } from '../../store/api-actions';
import checkEmailValidity from '../../shared/check-email-validity/check-email-validity';
import checkPasswordValidity from '../../shared/check-password-validity/check-password-validity';
import useInput from '../../hooks/use-input/use-input';

export default function SignInForm(): JSX.Element {
  const dispatch = useAppDispatch();

  const [email, setEmail, emailError, processEmailValidation] = useInput(
    checkEmailValidity,
    'Please enter a valid email address'
  );

  const [password, setPassword, passwordError, processPasswordValidation] = useInput(
    checkPasswordValidity,
    'The password should contain latin letters and numbers'
  );

  const handleSubmit: FormEventHandler = (e) => {
    e.preventDefault();

    const emailValidationResult = processEmailValidation();
    const passwordValidationResult = processPasswordValidation();
    if (emailValidationResult && passwordValidationResult) {
      dispatch(loginAction({
        email: email,
        password: password,
      }));
    }
  };

  return (
    <form action="#" className="sign-in__form" onSubmit={handleSubmit}>
      <div className="sign-in__message">
        <p data-testid={'sign-in-email-error'}>{ emailError }</p>
        <p data-testid={'sign-in-password-error'}>{ passwordError }</p>
      </div>
      <div className="sign-in__fields">
        <div className="sign-in__field">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="sign-in__input"
            type="email"
            placeholder="Email address"
            name="email"
            id="user-email"
            data-testid={'sign-in-email-input'}
          />
          <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
        </div>
        <div className="sign-in__field">
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="sign-in__input"
            type="password"
            placeholder="Password"
            name="password"
            id="user-password"
            data-testid={'sign-in-password-input'}
          />
          <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
        </div>
      </div>
      <div className="sign-in__submit">
        <button className="sign-in__btn" type="submit" data-testid={'sign-in-form-submit-button'}>Sign in</button>
      </div>
    </form>
  );
}
