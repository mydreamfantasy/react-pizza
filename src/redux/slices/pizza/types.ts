export type PizzaItem = {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  sizes: number[];
  types: number[];
};

export type SearchPizzaParams = {
  order: string;
  sortBy: string;
  category: string;
  search: string;
  currentPage: string;
};

export enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

export interface PizzaSliceState {
  items: PizzaItem[];
  status: Status;
}

// type FetchPizzasArgs = {
//   order: string;
//   sortBy: string;
//   category: string;
//   search: string;
//   currentPage: string;
// };
//  или
// type FetchPizzasArgs = Record<string, string>
