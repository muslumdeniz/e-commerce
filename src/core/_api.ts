export interface IStrapiError {
  status: number;
  name: string;
  message: string;
  details?: Record<string, any>;
}

export type IResponse<TData> = {
  data: TData | null;
  error?: IStrapiError;
};
