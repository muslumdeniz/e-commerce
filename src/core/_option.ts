export interface IOption {
  id: number;
  documentId: string;
  value: string;
  label: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  option_type: Optiontype;
  variant: Variant | null;
}

interface Variant {
  id: number;
  documentId: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  stock: string;
  priceOverride: string;
}

interface Optiontype {
  id: number;
  documentId: string;
  name: string;
  type: "size" | "color" | "w/h";
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}
