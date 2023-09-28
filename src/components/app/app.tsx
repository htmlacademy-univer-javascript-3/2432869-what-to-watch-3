import MainScreen from '../../pages/main-screen/main-screen';
import { AppProps } from './app-props';

export default function App(props: AppProps): JSX.Element {
  return (
    <MainScreen {...props}></MainScreen>
  );
}
