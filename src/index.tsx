import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { Provider } from 'react-redux';
import { store } from './store';
import { checkAuthAction, fetchFilmsDataAction } from './store/api-actions';
import browserHistory from './browser-history';
import HistoryRouter from './components/history-router/history-router';

store.dispatch(checkAuthAction());
store.dispatch(fetchFilmsDataAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <HistoryRouter history={browserHistory} >
        <App
          maxSimilarCardsCount={4}
          ratingWidth={10}
        />
      </HistoryRouter>
    </Provider>
  </React.StrictMode>
);
