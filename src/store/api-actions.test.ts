import { configureMockStore } from '@jedmao/redux-mock-store';
import { createAPI } from '../services/api';
import MockAdapter from 'axios-mock-adapter';
import thunk from 'redux-thunk';
import { Action } from 'redux';
import { AppThunkDispatch, extractActionsTypes } from '../utils/mocks';
import { State } from '../types/state';
import { checkAuthAction, fetchFavoriteFilmsDataAction, fetchFilmDataAction, fetchFilmsDataAction, fetchPromoFilmDataAction, fetchReviewsDataAction, fetchSimilarFilmsDataAction, loginAction, logoutAction, postFavoriteFilmAction, postReviewAction } from './api-actions';
import { APIRoute, FavoriteStatus } from '../consts';
import { redirectToRoute } from './action';
import { AuthData } from '../types/auth-data';
import * as tokenStorage from '../services/token';
import { mockFilmsData } from '../mocks/films-data';
import { setIsCurrentFilmFavorite } from './favorite-films-data/favorite-films-data';
import { mockFilmsShortData } from '../mocks/films-short-data';
import { mockReviewsData } from '../mocks/reviews-data';

describe('Async actions', () => {
  const axios = createAPI();
  const mockAxiosAdapter = new MockAdapter(axios);
  const middleware = [thunk.withExtraArgument(axios)];
  const mockStoreCreator = configureMockStore<State, Action<string>, AppThunkDispatch>(middleware);
  let store: ReturnType<typeof mockStoreCreator>;

  beforeEach(() => {
    store = mockStoreCreator({
      FilmsData: {
        filmData: undefined,
        filmsData: undefined,
        similarFilmsData: undefined,
      },
      FavoriteFilmsData: {
        favoriteFilmsData: undefined,
      },
      ReviewsData: {
        reviewsData: undefined,
      },
    });
  });

  describe('Api action: fetchFilmDataAction', () => {
    it('dispatch "pending", "setIsCurrentFilmFavorite" and "fulfilled", when request is correct', async() => {
      const mockFilmId = '8fd8sh2oid';
      const mockFilm = mockFilmsData[0];
      mockAxiosAdapter.onGet(`${APIRoute.Films}/${mockFilmId}`).reply(200, mockFilm);

      await store.dispatch(fetchFilmDataAction(mockFilmId));
      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);
      const fetchFilmDataActionFulfilled = emittedActions[2] as ReturnType<typeof fetchFilmDataAction.fulfilled>;

      expect(extractedActionsTypes).toEqual([
        fetchFilmDataAction.pending.type,
        setIsCurrentFilmFavorite.type,
        fetchFilmDataAction.fulfilled.type,
      ]);
      expect(fetchFilmDataActionFulfilled.payload).toEqual(mockFilm);
    });

    it('dispatch "pending", "redirectToRoute" and "fulfilled" when request is uncorrect', async () => {
      const mockFilmId = '8fd8sh2oid';
      mockAxiosAdapter.onGet(`${APIRoute.Films}/${mockFilmId}`).reply(400, {});

      await store.dispatch(fetchFilmDataAction(mockFilmId));
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        fetchFilmDataAction.pending.type,
        redirectToRoute.type,
        fetchFilmDataAction.fulfilled.type,
      ]);
    });
  });

  describe('Api action: fetchPromoFilmDataAction', () => {
    it('dispatch "pending", "setIsCurrentFilmFavorite" and "fulfilled", when request is correct', async() => {
      const mockPromoFilm = mockFilmsData[0];
      mockAxiosAdapter.onGet(APIRoute.Promo).reply(200, mockPromoFilm);

      await store.dispatch(fetchPromoFilmDataAction());
      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);
      const fetchPromoFilmDataActionFulfilled = emittedActions[2] as ReturnType<typeof fetchPromoFilmDataAction.fulfilled>;

      expect(extractedActionsTypes).toEqual([
        fetchPromoFilmDataAction.pending.type,
        setIsCurrentFilmFavorite.type,
        fetchPromoFilmDataAction.fulfilled.type,
      ]);
      expect(fetchPromoFilmDataActionFulfilled.payload).toEqual(mockPromoFilm);
    });

    it('dispatch "pending" and "rejected" when request is uncorrect', async () => {
      mockAxiosAdapter.onGet(APIRoute.Promo).reply(400, {});

      await store.dispatch(fetchPromoFilmDataAction());
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        fetchPromoFilmDataAction.pending.type,
        fetchPromoFilmDataAction.rejected.type,
      ]);
    });
  });

  describe('Api action: fetchFilmsDataAction', () => {
    it('dispatch "pending" and "fulfilled", when request is correct', async() => {
      const mockFilms = mockFilmsShortData;
      mockAxiosAdapter.onGet(APIRoute.Films).reply(200, mockFilms);

      await store.dispatch(fetchFilmsDataAction());
      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);
      const fetchFilmsDataActionFulfilled = emittedActions[1] as ReturnType<typeof fetchFilmsDataAction.fulfilled>;

      expect(extractedActionsTypes).toEqual([
        fetchFilmsDataAction.pending.type,
        fetchFilmsDataAction.fulfilled.type,
      ]);
      expect(fetchFilmsDataActionFulfilled.payload).toEqual(mockFilms);
    });

    it('dispatch "pending" and "rejected" when request is uncorrect', async () => {
      mockAxiosAdapter.onGet(APIRoute.Films).reply(400, []);

      await store.dispatch(fetchFilmsDataAction());
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        fetchFilmsDataAction.pending.type,
        fetchFilmsDataAction.rejected.type,
      ]);
    });
  });

  describe('Api action: fetchSimilarFilmsDataAction', () => {
    it('dispatch "pending" and "fulfilled", when request is correct', async() => {
      const mockFilmId = '8fd8sh2oid';
      const mockSimilarFilms = mockFilmsShortData;
      mockAxiosAdapter.onGet(`${APIRoute.Films}/${mockFilmId}/similar`).reply(200, mockSimilarFilms);

      await store.dispatch(fetchSimilarFilmsDataAction(mockFilmId));
      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);
      const fetchSimilarFilmsDataActionFulfilled = emittedActions[1] as ReturnType<typeof fetchSimilarFilmsDataAction.fulfilled>;

      expect(extractedActionsTypes).toEqual([
        fetchSimilarFilmsDataAction.pending.type,
        fetchSimilarFilmsDataAction.fulfilled.type,
      ]);
      expect(fetchSimilarFilmsDataActionFulfilled.payload).toEqual(mockSimilarFilms);
    });

    it('dispatch "pending" and "rejected" when request is uncorrect', async () => {
      const mockFilmId = '8fd8sh2oid';
      mockAxiosAdapter.onGet(`${APIRoute.Films}/${mockFilmId}/similar`).reply(400, []);

      await store.dispatch(fetchSimilarFilmsDataAction(mockFilmId));
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        fetchSimilarFilmsDataAction.pending.type,
        fetchSimilarFilmsDataAction.rejected.type,
      ]);
    });
  });

  describe('Api action: fetchFavoriteFilmsDataAction', () => {
    it('dispatch "pending" and "fulfilled", when request is correct', async() => {
      const mockFavoriteFilms = mockFilmsShortData;
      mockAxiosAdapter.onGet(APIRoute.Favorite).reply(200, mockFavoriteFilms);

      await store.dispatch(fetchFavoriteFilmsDataAction());
      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);
      const fetchFavoriteFilmsDataActionFulfilled = emittedActions[1] as ReturnType<typeof fetchFavoriteFilmsDataAction.fulfilled>;

      expect(extractedActionsTypes).toEqual([
        fetchFavoriteFilmsDataAction.pending.type,
        fetchFavoriteFilmsDataAction.fulfilled.type,
      ]);
      expect(fetchFavoriteFilmsDataActionFulfilled.payload).toEqual(mockFavoriteFilms);
    });

    it('dispatch "pending" and "rejected" when request is uncorrect', async () => {
      mockAxiosAdapter.onGet(APIRoute.Favorite).reply(401, []);

      await store.dispatch(fetchFavoriteFilmsDataAction());
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        fetchFavoriteFilmsDataAction.pending.type,
        fetchFavoriteFilmsDataAction.rejected.type,
      ]);
    });
  });

  describe('Api action: postFavoriteFilmAction', () => {
    it('dispatch "pending", "setIsCurrentFilmFavorite", "fetchFavoriteFilmsDataAction" and "fulfilled", when request is correct', async() => {
      const mockFavoriteFilm = mockFilmsData[0];
      const mockFavorite = { filmId: '8fd8sh2oid', status: FavoriteStatus.Set};
      mockAxiosAdapter.onPost(`${APIRoute.Favorite}/${mockFavorite.filmId}/${mockFavorite.status}`).reply(200, mockFavoriteFilm);

      await store.dispatch(postFavoriteFilmAction(mockFavorite));
      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);
      const postFavoriteFilmActionFulfilled = emittedActions[3] as ReturnType<typeof postFavoriteFilmAction.fulfilled>;

      expect(extractedActionsTypes).toEqual([
        postFavoriteFilmAction.pending.type,
        setIsCurrentFilmFavorite.type,
        fetchFavoriteFilmsDataAction.pending.type,
        postFavoriteFilmAction.fulfilled.type,
      ]);
      expect(postFavoriteFilmActionFulfilled.payload).toEqual(mockFavoriteFilm);
    });

    it('dispatch "pending" and "rejected" when request is uncorrect', async () => {
      const mockFavorite = { filmId: '8fd8sh2oid', status: FavoriteStatus.Set};
      mockAxiosAdapter.onPost(`${APIRoute.Favorite}/${mockFavorite.filmId}/${mockFavorite.status}`).reply(401, {});

      await store.dispatch(postFavoriteFilmAction(mockFavorite));
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        postFavoriteFilmAction.pending.type,
        postFavoriteFilmAction.rejected.type,
      ]);
    });
  });

  describe('Api action: fetchReviewsDataAction', () => {
    it('dispatch "pending" and "fulfilled", when request is correct', async() => {
      const mockFilmId = '8fd8sh2oid';
      const mockReviews = mockReviewsData;
      mockAxiosAdapter.onGet(`${APIRoute.Comments}/${mockFilmId}`).reply(200, mockReviews);

      await store.dispatch(fetchReviewsDataAction(mockFilmId));
      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);
      const fetchReviewsDataActionFulfilled = emittedActions[1] as ReturnType<typeof fetchReviewsDataAction.fulfilled>;

      expect(extractedActionsTypes).toEqual([
        fetchReviewsDataAction.pending.type,
        fetchReviewsDataAction.fulfilled.type,
      ]);
      expect(fetchReviewsDataActionFulfilled.payload).toEqual(mockReviews);
    });

    it('dispatch "pending" and "rejected" when request is uncorrect', async () => {
      const mockFilmId = '8fd8sh2oid';
      mockAxiosAdapter.onGet(`${APIRoute.Comments}/${mockFilmId}`).reply(400, []);

      await store.dispatch(fetchReviewsDataAction(mockFilmId));
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        fetchReviewsDataAction.pending.type,
        fetchReviewsDataAction.rejected.type,
      ]);
    });
  });

  describe('Api action: postReviewAction', () => {
    it('dispatch "pending", "redirectToRoute" and "fulfilled", when request is correct', async() => {
      const mockFilmId = '8fd8sh2oid';
      const mockReview = mockReviewsData[0];
      mockAxiosAdapter.onPost(`${APIRoute.Comments}/${mockFilmId}`).reply(200, mockReview);

      await store.dispatch(postReviewAction({ filmId: mockFilmId, comment: mockReview.comment, rating: mockReview.rating }));
      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);
      const postReviewActionFulfilled = emittedActions[2] as ReturnType<typeof postReviewAction.fulfilled>;

      expect(extractedActionsTypes).toEqual([
        postReviewAction.pending.type,
        redirectToRoute.type,
        postReviewAction.fulfilled.type,
      ]);
      expect(postReviewActionFulfilled.payload).toEqual(mockReview);
    });

    it('dispatch "pending" and "rejected" when request is uncorrect', async () => {
      const mockFilmId = '8fd8sh2oid';
      const mockReview = mockReviewsData[0];
      mockAxiosAdapter.onPost(`${APIRoute.Comments}/${mockFilmId}`).reply(401, {});

      await store.dispatch(postReviewAction({ filmId: mockFilmId, comment: mockReview.comment, rating: mockReview.rating }));
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        postReviewAction.pending.type,
        postReviewAction.rejected.type,
      ]);
    });
  });

  describe('Api action: checkAuthAction', () => {
    it('dispatch "pending", "fetchFavoriteFilmsDataAction" and "fulfilled" when request is correct', async () => {
      mockAxiosAdapter.onGet(APIRoute.Login).reply(200);

      await store.dispatch(checkAuthAction());
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        checkAuthAction.pending.type,
        fetchFavoriteFilmsDataAction.pending.type,
        checkAuthAction.fulfilled.type,
      ]);
    });

    it('dispatch "pending" and "rejected" when request is uncorrect', async() => {
      mockAxiosAdapter.onGet(APIRoute.Login).reply(400);

      await store.dispatch(checkAuthAction());
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        checkAuthAction.pending.type,
        checkAuthAction.rejected.type,
      ]);
    });
  });

  describe('Api action: loginAction', () => {
    it('dispatch "pending", "fetchFavoriteFilmsDataAction", "redirectToRoute", "fulfilled" when request is correct', async() => {
      const fakeUser: AuthData = { email: 'user@site.com', password: 'abc456' };
      const fakeServerReplay = { token: 'secret' };
      mockAxiosAdapter.onPost(APIRoute.Login).reply(200, fakeServerReplay);

      await store.dispatch(loginAction(fakeUser));
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        loginAction.pending.type,
        fetchFavoriteFilmsDataAction.pending.type,
        redirectToRoute.type,
        loginAction.fulfilled.type,
      ]);
    });

    it('call "saveToken" once with the received token', async () => {
      const fakeUser: AuthData = { email: 'user@site.com', password: 'abc456' };
      const fakeServerReplay = { token: 'secret' };
      mockAxiosAdapter.onPost(APIRoute.Login).reply(200, fakeServerReplay);
      const mockSaveToken = vi.spyOn(tokenStorage, 'saveToken');

      await store.dispatch(loginAction(fakeUser));

      expect(mockSaveToken).toBeCalledTimes(1);
      expect(mockSaveToken).toBeCalledWith(fakeServerReplay.token);
    });
  });

  describe('Api action: logoutAction', () => {
    it('dispatch "pending" and "fulfilled" when request is correct', async() => {
      mockAxiosAdapter.onDelete(APIRoute.Logout).reply(204);

      await store.dispatch(logoutAction());
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        logoutAction.pending.type,
        logoutAction.fulfilled.type,
      ]);
    });

    it('one call "dropToken" with "logoutAction"', async () => {
      mockAxiosAdapter.onDelete(APIRoute.Logout).reply(204);
      const mockDropToken = vi.spyOn(tokenStorage, 'dropToken');

      await store.dispatch(logoutAction());

      expect(mockDropToken).toBeCalledTimes(1);
    });
  });
});
