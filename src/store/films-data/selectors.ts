import { NameSpace } from '../../consts';
import { FilmData } from '../../types/film-data';
import { PromoFilmData } from '../../types/promo-film-data';
import { FilmShortData } from '../../types/film-short-data';
import { State } from '../../types/state';

export const getFilmData = (state: Pick<State, 'FilmsData'>): FilmData | undefined => state[NameSpace.FilmsData].filmData;
export const getPromoFilmData = (state: Pick<State, 'FilmsData'>): PromoFilmData | undefined => state[NameSpace.FilmsData].promoFilmData;
export const getFilmsData = (state: Pick<State, 'FilmsData'>): FilmShortData[] | undefined => state[NameSpace.FilmsData].filmsData;
export const getSimilarFilmData = (state: Pick<State, 'FilmsData'>): FilmShortData[] | undefined => state[NameSpace.FilmsData].similarFilmsData;
