import { IMedia } from "./_media";

export interface IProduct {
  id: number;
  documentId: string;
  name: string;
  subTitle: string;
  description: Description[];
  price: number;
  slug: string;
  images?: IMedia[];
  discount?: number;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

interface Description {
  type: string;
  children: Child[];
}

interface Child {
  text: string;
  type: string;
}
