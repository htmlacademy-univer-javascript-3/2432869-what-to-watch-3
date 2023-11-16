import './sign-in-form.css';
import { FormEventHandler, useEffect, useState } from 'react';
import { useAppDispatch } from '../hooks';
import { loginAction } from '../store/api-actions';

export default function SignInForm() {
  const [disabled, setDisabled] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useAppDispatch();
  const handleSubmit: FormEventHandler = (e) => {
    e.preventDefault();
    dispatch(loginAction({
      email: email,
      password: password,
    }));
  };

  useEffect(() => {
    setDisabled(!!(email.length && password.length));
  }, [email, password]);

  return (
    <form action="#" className="sign-in__form" onSubmit={handleSubmit}>
      <div className="sign-in__fields">
        <div className="sign-in__field">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
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
            required
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
        <button disabled={disabled} className="sign-in__btn" type="submit">Sign in</button>
      </div>
    </form>
  );
}
