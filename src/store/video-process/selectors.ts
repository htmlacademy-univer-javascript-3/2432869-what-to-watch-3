import { NameSpace } from '../../consts';
import { State } from '../../types/state';

export const isVideoPlaying = (state: State): boolean => state[NameSpace.Video].playing;
