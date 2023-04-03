import { DetailedHTMLProps, HTMLAttributes } from 'react';
import cn from 'classnames';

import styles from './ProductQuantity.module.scss';

interface ProductQuantityProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  quantity: number;
  setQuantity: (num: number) => void;
}

export const ProductQuantity = ({
  quantity,
  setQuantity,
  className,
  ...props
}: ProductQuantityProps) => {
  return (
    <div className={cn(styles.productQuantity, className)} {...props}>
      <button
        className={styles.productQuantityBtn}
        onClick={() => (quantity > 0 ? setQuantity(quantity - 1) : null)}
      >
        -
      </button>
      {quantity}
      <button
        className={styles.productQuantityBtn}
        onClick={() => setQuantity(quantity + 1)}
      >
        +
      </button>
    </div>
  );
};
