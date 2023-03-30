export interface IProduct {
  picSrc: string;
  title: string;
  sizeType: 'volume' | 'weight';
  size: string;
  code: number;
  manufacturer: string;
  brand: string;
  description: string;
  price: number;
  groups: string[];
}
