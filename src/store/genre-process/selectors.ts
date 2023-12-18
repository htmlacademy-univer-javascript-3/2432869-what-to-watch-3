import { NameSpace } from '../../consts';
import { Genre } from '../../types/genre';
import { State } from '../../types/state';

export const getGenre = (state: Pick<State, 'Genre'>): Genre => state[NameSpace.Genre].genre;
