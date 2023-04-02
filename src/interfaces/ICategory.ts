export const categories = {
  body: 'Уход за телом',
  hands: 'Уход за руками',
  legs: 'Уход за ногами',
  face: 'Уход за лицом',
  hair: 'Уход за волосами',
  tan: 'Средства для загара',
  shave: 'Средства для бритья',
  gift: 'Подарочные наборы',
  hygiene: 'Гигиеническая продукция',
  mouth: 'Гигиена полости рта',
  paper: 'Бумажная продукция',
} as const;

export type CategoryKey = keyof typeof categories;
export type CategoryValue = typeof categories[CategoryKey];

export interface ICategory {
  active: CategoryKey | null;
  list: Record<CategoryKey, CategoryValue>;
}
