import { Gender, IUser } from "./_user";

export interface ISession {
  jwt: string | null;
  user: IUser | null;
}

export type LoginBody = {
  username: string;
  password: string;
};
export type RegisterBody = {
  name: string;
  surname: string;
  username: string;
  email: string;
  birthday: string;
  phone: string;
  gender: Gender;
  password: string;
  passwordConfirm: string;
  membershipAgreement: boolean;
  expressConsentAgreement: boolean;
};
