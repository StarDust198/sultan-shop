import { DetailedHTMLProps, HTMLAttributes } from 'react';
import cn from 'classnames';

import styles from './ProductPrice.module.scss';

interface ProductPriceProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  price: number;
}

export const ProductPrice = ({
  price,
  className,
  ...props
}: ProductPriceProps) => {
  const formatPrice = (price: number): string =>
    price.toString().replace('.', ',');

  return (
    <div className={cn(styles.productPrice, className)} {...props}>
      {formatPrice(price)} ₸
    </div>
  );
};
