import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import SignInForm from '../../components/sign-in-form/sign-in-form';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../hooks';
import { getAuthStatus } from '../../store/user-process/selectors';
import { AuthStatus } from '../../consts';
import { AppRoutes } from '../../app-routes';
import Spinner from '../../components/spinner/spinner';

export default function SignInScreen(): JSX.Element {
  const navigate = useNavigate();
  const authStatus = useAppSelector(getAuthStatus);

  if (authStatus === AuthStatus.Auth) {
    navigate(AppRoutes.Main.FullPath);
  }

  return (
    <div className="user-page">
      {authStatus === AuthStatus.Unknown
        ? <Spinner />
        :
        <>
          <Header className='user-page__head' authScreen></Header>

          <div className="sign-in user-page__content">
            <SignInForm />
          </div>

          <Footer></Footer>
        </>}
    </div>
  );
}
