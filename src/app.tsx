import { Routes, Route } from 'react-router-dom';
import MainScreen, { MainScreenProps } from './pages/main-screen/main-screen';
import SignInScreen from './pages/sign-in-screen/sign-in-screen';
import MyListScreen from './pages/my-list-screen/my-list-screen';
import FilmScreen from './pages/film-screen/film-screen';
import AddReviewScreen, { AddReviewScreenProps } from './pages/add-review-screen/add-review-screen';
import PlayerScreen from './pages/player-screen/player-screen';
import Screen404 from './pages/404-screen/404-screen';
import PrivateRoute from './components/private-route';
import { ROUTES } from './routes';
import HistoryRouter from './components/history-route';
import browserHistory from './browser-history';

export type AppProps = MainScreenProps & AddReviewScreenProps;

export default function App(props: AppProps): JSX.Element {
  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route path={ROUTES.main.fullPath} element={<MainScreen genres={props.genres} />} />
        <Route path={ROUTES.login.fullPath} element={<SignInScreen />} />
        <Route path={ROUTES.myList.fullPath} element={
          <PrivateRoute>
            <MyListScreen />
          </PrivateRoute>
        }
        />
        <Route path={ROUTES.film.fullPath}>
          <Route index element={<FilmScreen />} />
          <Route path={ROUTES.filmReview.fullPath} element={<AddReviewScreen ratingWidth={props.ratingWidth} />} />
        </Route>
        <Route path={ROUTES.filmPlayer.fullPath} element={<PlayerScreen />} />
        <Route path={ROUTES.notFound.fullPath} element={<Screen404 />} />
      </Routes>
    </HistoryRouter>
  );
}
