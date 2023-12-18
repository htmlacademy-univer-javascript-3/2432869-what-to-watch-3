import { PropsWithChildren } from 'react';
import Logo from '../logo/logo';
import UserBlock from '../user-block/user-block';
import { AuthStatus } from '../../consts';
import SignInLink from '../sign-in-link/sign-in-link';
import { useAppSelector } from '../../hooks';
import { getAuthStatus } from '../../store/user-process/selectors';

export type HeaderProps = PropsWithChildren<{
  className?: string;
  authScreen?: boolean;
}>;

export default function Header({ children, className = '', authScreen = false }: HeaderProps): JSX.Element {
  const authStatus = useAppSelector(getAuthStatus);

  let headerContent;
  if (authStatus === AuthStatus.Auth) {
    headerContent = <UserBlock />;
  } else if (authStatus === AuthStatus.Unknown) {
    headerContent = null;
  } else if (authScreen) {
    headerContent = <h1 className="page-title user-page__title" data-testid={'sign-in-title'}>Sign In</h1>;
  } else {
    headerContent = <SignInLink />;
  }

  return (
    <header className={`page-header ${className}`}>
      <Logo />

      { children }

      { headerContent }
    </header>
  );
}
