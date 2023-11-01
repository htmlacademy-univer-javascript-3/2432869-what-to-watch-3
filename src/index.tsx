import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
import { promoFilmData } from './mocks/promo-film-data';
import { PlayerData } from './mocks/player-data';
import { filmsData } from './mocks/films-data';
import { FilmReviewsData } from './mocks/film-reviews-data';
import { Provider } from 'react-redux';
import { store } from './store';
import { genres } from './mocks/genres';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        {...PlayerData}
        ratingWidth={10}
        userFilmsCount={6}
        filmsLikeThisCount={4}
        promoFilmData={promoFilmData}
        filmsData={filmsData}
        filmReviewsData={FilmReviewsData}
        genres={genres}
      />
    </Provider>
  </React.StrictMode>
);
