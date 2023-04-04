import { DetailedHTMLProps, HTMLAttributes } from 'react';
import cn from 'classnames';

import { numberWithSpaces } from 'helpers/utils';
import { useAppSelector } from 'app/hooks';
import { selectCartTotalPrice, selectCartItems } from 'features/cart/cartSlice';

import { ReactComponent as CartIcon } from 'assets/cart.svg';

import styles from './Cart.module.scss';
import { useNavigate } from 'react-router-dom';

interface CartProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  withInfo?: boolean;
}

export const Cart = ({ withInfo = true, className, ...props }: CartProps) => {
  const navigate = useNavigate();
  const cartItems = useAppSelector(selectCartItems);
  const cartPrice = useAppSelector(selectCartTotalPrice);

  return (
    <div
      className={cn(styles.cart, className)}
      {...props}
      onClick={() => navigate('/cart')}
    >
      <div className={styles.cartImg}>
        <CartIcon />
        <div className={styles.cartBadge}>{cartItems}</div>
      </div>

      {withInfo && (
        <div className={styles.cartInfo}>
          Корзина
          {cartPrice > 0 && (
            <span className={styles.cartPrice}>
              {numberWithSpaces(cartPrice)} ₸
            </span>
          )}
        </div>
      )}
    </div>
  );
};
