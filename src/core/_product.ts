import { IMedia } from "./_media";
import { Gender } from "./_user";

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
  gender: "men" | "women" | "children";
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
