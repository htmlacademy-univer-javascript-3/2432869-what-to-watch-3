import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainScreen, { MainScreenProps } from './pages/main-screen/main-screen';
import SignInScreen from './pages/sign-in-screen/sign-in-screen';
import MyListScreen, { MyListScreenProps } from './pages/my-list-screen/my-list-screen';
import FilmScreen, { FilmScreenProps } from './pages/film-screen/film-screen';
import AddReviewScreen, { AddReviewScreenProps } from './pages/add-review-screen/add-review-screen';
import PlayerScreen, { PlayerScreenProps } from './pages/player-screen/player-screen';
import Screen404 from './pages/404-screen/404-screen';
import PrivateRoute from './components/private-route';
import { ROUTES } from './routes';

export type AppProps = MainScreenProps & MyListScreenProps & FilmScreenProps & AddReviewScreenProps & PlayerScreenProps;

export default function App(props: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.main.fullPath} element={<MainScreen {...props as MainScreenProps} />} />
        <Route path={ROUTES.login.fullPath} element={<SignInScreen />} />
        <Route path={ROUTES.myList.fullPath} element={
          <PrivateRoute authStatus>
            <MyListScreen {...props as MyListScreenProps} />
          </PrivateRoute>
        }
        />
        <Route path={ROUTES.film.fullPath}>
          <Route index element={<FilmScreen {...props as FilmScreenProps} />} />
          <Route path={ROUTES.filmReview.fullPath} element={<AddReviewScreen {...props as AddReviewScreenProps} />} />
        </Route>
        <Route path={ROUTES.filmPlayer.fullPath} element={<PlayerScreen {...props as PlayerScreenProps} />} />
        <Route path={ROUTES.notFound.fullPath} element={<Screen404 />} />
      </Routes>
    </BrowserRouter>
  );
}
