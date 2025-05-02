import { IMedia } from "./_media";

export interface IProduct {
  id: number;
  documentId: string;
  name: string;
  subTitle: string;
  description: Description[];
  slug: string;
  images?: IMedia[];
  gender: "men" | "women" | "children";
  highlight: boolean;
  variants?: Variant[];
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

interface Variant {
  id: number;
  documentId: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  stock: string;
  priceOverride: string;
  option_values?: OptionValue[];
}

interface OptionValue {
  id: number;
  value: string;
}
