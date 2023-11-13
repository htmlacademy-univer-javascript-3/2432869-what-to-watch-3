import './sign-out-button.css';
import { useAppDispatch } from '../../hooks';
import { logoutAction } from '../../store/api-actions';

export type SignOutButtonProps = {
  classNames?: string;
};

export default function SignOutButton({ classNames = '' }: SignOutButtonProps) {
  const dispatch = useAppDispatch();
  const handleClick = () => {
    dispatch(logoutAction());
  };

  return (
    <button onClick={handleClick} className={`user-block__link sign-out-button ${classNames}`}>
      Sign out
    </button>
  );
}
