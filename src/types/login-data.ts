import { UserData } from './user-data';

export type LoginData = UserData & {
  token: string;
};
