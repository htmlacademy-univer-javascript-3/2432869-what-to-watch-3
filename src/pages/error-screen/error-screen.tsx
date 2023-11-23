import './error-screen.css';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes';
import Logo from '../../components/logo';
import { ErrorCodesDesc } from '../../consts';
import { useAppSelector } from '../../hooks';
import { getErrorCode } from '../../store/error-process/selectors';

export type ErrorScreenProps = {
  errorStatusCode?: number;
};

export default function ErrorScreen({ errorStatusCode = -1 }: ErrorScreenProps): JSX.Element {
  const errorCode = useAppSelector(getErrorCode) ?? errorStatusCode;

  let errorTitle: string, errorDesc: string;
  if (errorCode === -1) {
    errorTitle = '';
    errorDesc = 'An error occured';
  } else {
    errorTitle = `${errorCode} `;
    errorDesc = ErrorCodesDesc[errorCode] ?? 'An error occured';
  }

  return (
    <div className="error-screen__wrapper">
      <Logo />

      <div className="error-screen__title">
        <h1>
          { errorTitle }
          <small>{ errorDesc }</small>
        </h1>
        <Link to={ROUTES.main.fullPath} className="error-screen__link">Go back to the main page</Link>
      </div>
    </div>
  );
}
