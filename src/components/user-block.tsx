import SignOutButton from './sign-out-button/sign-out-button';

export default function UserBlock(): JSX.Element {
  return (
    <ul className="user-block">
      <li className="user-block__item">
        <div className="user-block__avatar">
          <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
        </div>
      </li>
      <li className="user-block__item">
        <SignOutButton classNames={'user-block__link'} />
      </li>
    </ul>
  );
}
