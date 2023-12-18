import './sign-in-link.css';
import { Link } from 'react-router-dom';
import { AppRoutes } from '../../app-routes';

export type SignInLinkProps = {
  classNames?: '';
};

export default function SignInLink({ classNames = '' }: SignInLinkProps): JSX.Element {
  return (
    <Link to={AppRoutes.Login.FullPath} className={`sign-in-link ${classNames}`} data-testid={'sign-in-link'}>
      Sign in
    </Link>
  );
}
