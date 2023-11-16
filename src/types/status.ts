import { Status } from '../consts';
import { ValueOf } from './value-of';

export type Status = ValueOf<typeof Status>;
