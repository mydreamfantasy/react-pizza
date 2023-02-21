export enum SortPropertyEnum {
  RATING_DESC = 'rating',
  RATING_ASC = '-rating',
  PRICE_DESC = 'price',
  PRICE_ASC = '-price',
  TITLE_DESC = 'title',
  TITLE_ASC = '-title',
}

export type SortItem = {
  name: string;
  sortProperty: SortPropertyEnum;
};

//'rating' | '-rating' | 'price' | '-price' | 'title' | '-title';

export interface FilterState {
  searchValue: string;
  categoryId: number;
  currentPage: number;
  sort: SortItem;
}
