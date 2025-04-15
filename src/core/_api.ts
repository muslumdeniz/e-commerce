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

export type IResponsePaginate<TData> = {
  data: {
    data: TData[];
    meta: {
      pagination: Pagination;
    };
  } | null;
  error?: IStrapiError;
};

interface Pagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}
