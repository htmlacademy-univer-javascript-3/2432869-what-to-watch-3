// import { renderHook, render } from '@testing-library/react';
// import useFilmByParamId from './use-film-by-param-id';
// import { withHistory, withStore } from '../../utils/mock-component';
// import { mockFilmsData } from '../../mocks/films-data';
// import { createMemoryHistory } from 'history';
// import { AppRoutes } from '../../app-routes';
// import { generatePath } from 'react-router-dom';
// import { APIRoute } from '../../consts';

// describe('Hook: useFilmByParamId', () => {
//   const filmData = mockFilmsData[8];

//   it('should return film data by id value in url params', () => {
//     const history = createMemoryHistory();
//     const withHistoryComponent = withHistory(<div />, history);
//     const { withStoreComponent, mockAxiosAdapter } = withStore(withHistoryComponent, {
//       FilmsData: { filmData: undefined }
//     });
//     mockAxiosAdapter.onGet(`${APIRoute.Films}/${filmData.id}`).reply(200, filmData);

//     render(withStoreComponent);
//     history.push(generatePath(AppRoutes.Film.FullPath, { id: filmData.id }));
//     const { result: { current: hookFilmData } } = renderHook(() => useFilmByParamId());

//     expect(hookFilmData).toEqual(filmData);
//   });
// });
