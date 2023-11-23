import './sign-in-link.css';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes';

export type SignInLinkProps = {
  classNames?: '';
};

export default function SignInLink({ classNames = '' }: SignInLinkProps): JSX.Element {
  return (
    <Link to={ROUTES.login.fullPath} className={`sign-in-link ${classNames}`}>
      Sign in
    </Link>
  );
}
