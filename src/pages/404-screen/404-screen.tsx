import './404-screen.css';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes';
import Logo from '../../components/logo';

export default function Screen404(): JSX.Element {
  return (
    <div className="screen404__wrapper">
      <Logo />

      <div className="screen404__title">
        <h1>404 <small>Not Found</small></h1>
        <Link to={ROUTES.main.fullPath} className="screen404__link">Go back to the main page</Link>
      </div>
    </div>
  );
}
