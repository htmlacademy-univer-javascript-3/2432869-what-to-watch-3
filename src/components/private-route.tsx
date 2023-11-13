import { Navigate } from 'react-router-dom';
import { PropsWithChildren } from 'react';
import { AuthStatus } from '../consts';
import { useAuthStatusSelector } from '../hooks/selectors';

export type PrivateRouteProps = PropsWithChildren;

export default function PrivateRoute({ children }: PrivateRouteProps): JSX.Element {
  const authStatus = useAuthStatusSelector();

  return (
    authStatus === AuthStatus.Auth
      ? children as JSX.Element
      : <Navigate to={'/login'} />
  );
}
