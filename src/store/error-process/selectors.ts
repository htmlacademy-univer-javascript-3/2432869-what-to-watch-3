import { NameSpace } from '../../consts';
import { State } from '../../types/state';

export const getErrorCode = (state: Pick<State, 'Error'>): number | undefined => state[NameSpace.Error].errorCode;
