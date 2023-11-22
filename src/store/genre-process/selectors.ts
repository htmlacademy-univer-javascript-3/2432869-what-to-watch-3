import { NameSpace } from '../../consts';
import { Genre } from '../../mocks/genres';
import { State } from '../../types/state';

export const getGenre = (state: State): Genre => state[NameSpace.Genre].genre;
