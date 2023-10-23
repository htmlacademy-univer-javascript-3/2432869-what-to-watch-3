import { PropsWithChildren } from 'react';
import Logo from './logo';
import Copyright from './copyright';

export type FooterProps = PropsWithChildren;

export default function Footer({ children }: FooterProps): JSX.Element {
  return (
    <footer className="page-footer">
      <Logo light />

      { children }

      <Copyright />
    </footer>
  );
}
