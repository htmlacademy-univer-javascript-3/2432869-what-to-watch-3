import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
import { PromoFilmData } from './mocks/promo-film-data';
import { PlayerData } from './mocks/player-data';
import { filmGenresData } from './mocks/film-genres-data';
import { filmsData } from './mocks/films-data';
import { FilmReviewsData } from './mocks/film-reviews-data';
import { FilmScreenTabsData } from './components/tabs/film-screen-tabs/film-screen-tabs-data';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App
      {...PromoFilmData}
      {...PlayerData}
      ratingWidth={10}
      userFilmsCount={9}
      filmsLikeThisCount={4}
      filmGenresData={filmGenresData}
      filmsData={filmsData}
      filmReviewsData={FilmReviewsData}
      filmScreenTabsData={FilmScreenTabsData}
    />
  </React.StrictMode>
);
