import { Navigate } from 'react-router-dom';
import { PropsWithChildren } from 'react';

export type PrivateRouteProps = PropsWithChildren<{
  authStatus: boolean;
}>;

export default function PrivateRoute({ authStatus, children }: PrivateRouteProps): JSX.Element {
  return (
    authStatus
      ? children as JSX.Element
      : <Navigate to={'/login'} />
  );
}
