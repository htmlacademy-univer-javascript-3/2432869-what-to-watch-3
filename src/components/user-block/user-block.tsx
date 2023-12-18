import { useNavigate } from 'react-router-dom';
import SignOutButton from '../sign-out-button/sign-out-button';
import { AppRoutes } from '../../app-routes';
import { useAppSelector } from '../../hooks';
import { getUserAvatar } from '../../store/user-process/selectors';

export default function UserBlock(): JSX.Element {
  const navigate = useNavigate();
  const avatarUrl = useAppSelector(getUserAvatar);

  return (
    <ul className="user-block">
      <li className="user-block__item">
        <div className="user-block__avatar">
          <img
            onClick={() => navigate(AppRoutes.MyList.FullPath)}
            src={avatarUrl ?? 'img/avatar.jpg'}
            alt="User avatar"
            width="63"
            height="63"
            data-testid={'user-avatar'}
          />
        </div>
      </li>
      <li className="user-block__item">
        <SignOutButton classNames={'user-block__link'} />
      </li>
    </ul>
  );
}
