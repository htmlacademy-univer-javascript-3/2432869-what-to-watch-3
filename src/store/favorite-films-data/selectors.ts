import { NameSpace } from '../../consts';
import { FilmShortData } from '../../types/film-short-data';
import { State } from '../../types/state';

export const getFavoriteFilmData = (state: Pick<State, 'FavoriteFilmsData'>): FilmShortData[] | undefined => state[NameSpace.FavoriteFilmsData].favoriteFilmsData;
export const getFavoriteFilmsCount = (state: Pick<State, 'FavoriteFilmsData'>): number => state[NameSpace.FavoriteFilmsData].favoriteFilmsData?.length ?? 0;

export const isCurrentFilmFavorite = (state: Pick<State, 'FavoriteFilmsData'>): boolean => state[NameSpace.FavoriteFilmsData].isCurrentFilmFavorite;
