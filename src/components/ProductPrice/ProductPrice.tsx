import { DetailedHTMLProps, HTMLAttributes } from 'react';
import cn from 'classnames';

import styles from './ProductPrice.module.scss';
import { numberWithSpaces } from 'helpers/utils';

interface ProductPriceProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  price: number;
}

export const ProductPrice = ({
  price,
  className,
  ...props
}: ProductPriceProps) => {
  return (
    <div className={cn(styles.productPrice, className)} {...props}>
      {numberWithSpaces(price)}&nbsp;₸
    </div>
  );
};
