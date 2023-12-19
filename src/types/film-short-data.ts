import { Genre } from './genre';

export type FilmShortData = {
  id: string;
  name: string;
  previewImage: string;
  previewVideoLink: string;
  genre: Genre;
};
