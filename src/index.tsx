import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app';
import { SETTINGS } from './app-settings';
import { filmGenreLinks } from './mocks/film-genre-links';
import { smallFilmCardsInfo } from './mocks/small-film-cards-info';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App {...SETTINGS} filmGenreLinks={filmGenreLinks} smallFilmCardsInfo={smallFilmCardsInfo}></App>
  </React.StrictMode>
);
