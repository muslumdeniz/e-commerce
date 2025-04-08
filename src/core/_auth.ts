import { IUser } from "./_user";

export interface ISession {
  jwt: string | null;
  user: IUser | null;
}

export type LoginBody = {
  username: string;
  password: string;
};
