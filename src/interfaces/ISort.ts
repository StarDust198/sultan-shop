export enum SortEnum {
  name,
  price,
}

export type SortDirection = 'up' | 'down';

export interface ISort {
  field: SortEnum;
  direction: SortDirection;
}
