import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainScreen, { MainScreenProps } from '../pages/main-screen/main-screen';
import SignInScreen from '../pages/sign-in-screen/sign-in-screen';
import MyListScreen from '../pages/my-list-screen/my-list-screen';
import FilmScreen from '../pages/film-screen/film-screen';
import AddReviewScreen from '../pages/add-review-screen/add-review-screen';
import PlayerScreen from '../pages/player-screen/player-screen';
import Screen404 from '../pages/404-screen/404-screen';
import PrivateRoute from './private-route';

export type AppProps = MainScreenProps;

export default function App(props: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainScreen {...props}></MainScreen>} />
        <Route path='/login' element={<SignInScreen></SignInScreen>} />
        <Route path='/mylist' element={
          <PrivateRoute authStatus>
            <MyListScreen></MyListScreen>
          </PrivateRoute>
        }
        />
        <Route path='/films/:id' element={<FilmScreen></FilmScreen>}>
          <Route path='review' element={<AddReviewScreen></AddReviewScreen>} />
        </Route>
        <Route path='/player/:id' element={<PlayerScreen></PlayerScreen>} />
        <Route path='*' element={<Screen404></Screen404>} />
      </Routes>
    </BrowserRouter>
  );
}
