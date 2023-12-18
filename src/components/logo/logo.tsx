import { Link } from 'react-router-dom';
import { AppRoutes } from '../../app-routes';

export type LogoProps = {
  light?: boolean;
}

export default function Logo({ light = false }: LogoProps): JSX.Element {
  return (
    <div className="logo" data-testid={`${light ? 'light-' : ''}logo`}>
      <Link to={AppRoutes.Main.FullPath} className={`logo__link ${light ? 'logo__link--light' : ''}`}>
        <span className="logo__letter logo__letter--1">W</span>
        <span className="logo__letter logo__letter--2">T</span>
        <span className="logo__letter logo__letter--3">W</span>
      </Link>
    </div>
  );
}
