import { Routes, Route } from 'react-router-dom';
import MainScreen from '../../pages/main-screen/main-screen';
import SignInScreen from '../../pages/sign-in-screen/sign-in-screen';
import MyListScreen from '../../pages/my-list-screen/my-list-screen';
import FilmScreen, { FilmScreenProps } from '../../pages/film-screen/film-screen';
import AddReviewScreen, { AddReviewScreenProps } from '../../pages/add-review-screen/add-review-screen';
import PlayerScreen from '../../pages/player-screen/player-screen';
import PrivateRoute from '../private-router/private-route';
import { AppRoutes as AppRoutes } from '../../app-routes';
import { StatusCodes } from 'http-status-codes';
import ErrorScreen from '../../pages/error-screen/error-screen';

export type AppProps = FilmScreenProps & AddReviewScreenProps;

export default function App(props: AppProps): JSX.Element {
  return (
    <Routes>
      <Route path={AppRoutes.Main.FullPath} element={<MainScreen />} />
      <Route path={AppRoutes.Login.FullPath} element={<SignInScreen />} />
      <Route path={AppRoutes.MyList.FullPath} element={
        <PrivateRoute>
          <MyListScreen />
        </PrivateRoute>
      }
      />
      <Route path={AppRoutes.Film.FullPath}>
        <Route index element={<FilmScreen maxSimilarCardsCount={props.maxSimilarCardsCount} />} />
        <Route path={AppRoutes.FilmReview.FullPath} element={
          <PrivateRoute>
            <AddReviewScreen ratingWidth={props.ratingWidth} />
          </PrivateRoute>
        }
        />
      </Route>
      <Route path={AppRoutes.FilmPlayer.FullPath} element={<PlayerScreen />} />
      <Route path={AppRoutes.Error.FullPath} element={<ErrorScreen errorStatusCode={StatusCodes.NOT_FOUND} />} />
    </Routes>
  );
}
