import { PropsWithChildren } from 'react';
import Spinner from './spinner/spinner';

export type LoadingWrapperProps = PropsWithChildren<{
  loading: boolean;
}>;

export default function LoadingWrapper({ loading, children }: LoadingWrapperProps): JSX.Element {
  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {loading
        ? <Spinner />
        : children}
    </>
  );
}
