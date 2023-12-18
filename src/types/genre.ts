import { Genres } from '../consts';
import { ValueOf } from './value-of';

export type Genres = typeof Genres;

export type Genre = ValueOf<Genres>;
