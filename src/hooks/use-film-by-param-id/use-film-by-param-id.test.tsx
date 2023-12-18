import { render, screen, waitFor } from '@testing-library/react';
import { withHistory, withStore } from '../../utils/mock-component';
import { mockFilmsData } from '../../mocks/films-data';
import { createMemoryHistory } from 'history';
import { AppRoutes } from '../../app-routes';
import { generatePath } from 'react-router-dom';
import { APIRoute } from '../../consts';
import UseFilmByParamIdTestComponent from './use-film-by-param-test-component';

describe('Hook: useFilmByParamId', () => {
  it('should return film data by id value in url params', () => {
    const filmData = mockFilmsData[8];
    const history = createMemoryHistory();
    const withHistoryComponent = withHistory(<UseFilmByParamIdTestComponent />, history);
    const { withStoreComponent, mockAxiosAdapter } = withStore(withHistoryComponent, {
      FilmsData: { filmData: undefined }
    });
    history.push(generatePath(AppRoutes.Film.FullPath, { id: filmData.id }));
    mockAxiosAdapter.onGet(`${APIRoute.Films}/${filmData.id}`).reply(200, filmData);

    render(withStoreComponent);

    expect(screen.getByTestId('film-id')).toHaveTextContent(filmData.id);
    expect(screen.getByTestId('film-name')).toHaveTextContent(filmData.name);
    expect(screen.getByTestId('film-genre')).toHaveTextContent(filmData.genre);
    expect(screen.getByTestId('film-rating')).toHaveTextContent(filmData.rating.toString());
  });
});

// function Abc1({ children }: PropsWithChildren): JSX.Element {
//     const history = createMemoryHistory();
//     const withHistoryComponent = withHistory(children as JSX.Element, history);

//     history.push(generatePath(AppRoutes.Film.FullPath, { id: filmData.id }));

//     return withHistoryComponent;
//   }

//   function Abc2({ children }: PropsWithChildren): JSX.Element {
//     const axios = createAPI();
//     const middleware = [thunk.withExtraArgument(axios)];
//     const mockStoreCreator = configureMockStore<State, Action<string>, AppThunkDispatch>(middleware);
//     const mockStore = mockStoreCreator();

//     const mockAxiosAdapter = new MockAdapter(axios);
//     mockAxiosAdapter.onGet(`${APIRoute.Films}/${filmData.id}`).reply(200, filmData);

//     return (
//       <Abc1>
//         <Provider store={mockStore}>
//           { children }
//         </Provider>
//       </Abc1>
//     );
//   }
