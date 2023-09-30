import { Navigate } from 'react-router-dom';
import { PrivateRouteProps } from './private-route-props';

export default function PrivateRoute({ authStatus, children }: PrivateRouteProps): JSX.Element {
  return (
    authStatus
      ? children as JSX.Element
      : <Navigate to={'/login'}></Navigate>
  );
}
