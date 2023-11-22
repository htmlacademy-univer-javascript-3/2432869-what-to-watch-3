import { FormEventHandler } from 'react';
import { useAppDispatch } from '../hooks';
import { loginAction } from '../store/api-actions';
import checkEmailValidity from '../shared/check-email-validity';
import checkPasswordValidity from '../shared/check-password-validity';
import useInput from '../hooks/use-input';

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
    if (processEmailValidation() && processPasswordValidation()) {
      dispatch(loginAction({
        email: email,
        password: password,
      }));
    }
  };

  return (
    <form action="#" className="sign-in__form" onSubmit={handleSubmit}>
      {(emailError || passwordError) &&
        <div className="sign-in__message">
          <p>{ emailError }</p>
          <p>{ passwordError }</p>
        </div>}
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
          />
          <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
        </div>
      </div>
      <div className="sign-in__submit">
        <button className="sign-in__btn" type="submit">Sign in</button>
      </div>
    </form>
  );
}
