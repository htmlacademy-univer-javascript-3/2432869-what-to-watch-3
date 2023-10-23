import { PropsWithChildren } from 'react';
import Logo from './logo';
import UserBlock from './user-block';

export type HeaderProps = PropsWithChildren<{
  className?: string;
  authScreen?: boolean;
}>;

export default function Header({ children, className = '', authScreen = false }: HeaderProps): JSX.Element {
  return (
    <header className={`page-header ${className}`}>
      <Logo />

      { children }

      { authScreen
        ? <h1 className="page-title user-page__title">Sign in</h1>
        : <UserBlock /> }
    </header>
  );
}
