import Header from '../../components/header';
import Footer from '../../components/footer';
import SignInForm from '../../components/sign-in-form';

export default function SignInScreen(): JSX.Element {
  return (
    <div className="user-page">
      <Header className='user-page__head' authScreen></Header>

      <div className="sign-in user-page__content">
        <SignInForm />
      </div>

      <Footer></Footer>
    </div>
  );
}
