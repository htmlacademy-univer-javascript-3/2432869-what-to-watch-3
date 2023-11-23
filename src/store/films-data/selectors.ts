import { NameSpace } from '../../consts';
import { FilmData } from '../../types/film-data';
import { PromoFilmData } from '../../types/promo-film-data';
import { ShortFilmData } from '../../types/short-film-data';
import { State } from '../../types/state';

export const getFilmData = (state: State): FilmData | undefined => state[NameSpace.FilmsData].filmData;
export const getPromoFilmData = (state: State): PromoFilmData | undefined => state[NameSpace.FilmsData].promoFilmData;
export const getFilmsData = (state: State): ShortFilmData[] => state[NameSpace.FilmsData].filmsData;
export const getSimilarFilmData = (state: State): ShortFilmData[] => state[NameSpace.FilmsData].similarFilmsData;

export const getFavoriteFilmData = (state: State): ShortFilmData[] => state[NameSpace.FilmsData].favoriteFilmsData;
export const getFavoriteFilmsCount = (state: State): number => state[NameSpace.FilmsData].favoriteFilmsData.length;
