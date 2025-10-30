export interface Pokemon {
  name: string;
  image: string;
  types: string[];
}

export interface Pagination {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  itemsPerPage: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
}

export interface PokeApiResponse {
  data: Pokemon[];
  pagination: Pagination;
  success: boolean;
}
