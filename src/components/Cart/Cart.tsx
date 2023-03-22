import { DetailedHTMLProps, HTMLAttributes } from 'react';
import cn from 'classnames';

import { ReactComponent as CartIcon } from './cart.svg';

import styles from './Cart.module.css';

interface CartProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  withInfo?: boolean;
}

export const Cart = ({ withInfo = true, className, ...props }: CartProps) => {
  return (
    <div className={cn(styles.cartWrapper, className)} {...props}>
      <div className={styles.cartImg}>
        <CartIcon />
        <div className={styles.cartBadge}>3</div>
      </div>

      {withInfo && (
        <div className={styles.cartInfo}>
          Корзина
          <span className={styles.cartPrice}>12 478 ₸</span>
        </div>
      )}
    </div>
  );
};
