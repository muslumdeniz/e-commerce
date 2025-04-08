export interface IUser {
  id: number;
  documentId: string;
  username: string;
  email: string;
  provider: string;
  confirmed: boolean;
  blocked: boolean;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  name: string;
  surname: string;
  phone: string;
  birthday: string;
  gender: Gender;
  membershipAgreement: boolean;
  expressConsentAgreement: boolean;
}

export enum Gender {
  male = "male",
  female = "female",
}
