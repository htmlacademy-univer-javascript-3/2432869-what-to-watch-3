import { Genre } from './genre';

export type PromoFilmData = {
  id: string;
  name: string;
  posterImage: string;
  backgroundImage: string;
  videoLink: string;
  genre: Genre;
  released: number;
  isFavorite?: boolean;
};
