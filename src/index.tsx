import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
import { Provider } from 'react-redux';
import { store } from './store';
import { genres } from './mocks/genres';
import { checkAuthAction, fetchFilmsDataAction, fetchPromoFilmDataAction } from './store/api-actions';

store.dispatch(checkAuthAction());
store.dispatch(fetchFilmsDataAction());
store.dispatch(fetchPromoFilmDataAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        ratingWidth={10}
        genres={genres}
      />
    </Provider>
  </React.StrictMode>
);
