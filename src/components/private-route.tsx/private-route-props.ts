import { PropsWithChildren } from 'react';

export type PrivateRouteProps = PropsWithChildren<{
  authStatus: boolean;
}>;
