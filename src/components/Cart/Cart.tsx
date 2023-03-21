import { useState } from 'react';
import cn from 'classnames';

import { ReactComponent as CartIcon } from './cart.svg';

import styles from './Cart.module.css';

interface CartProps {}

export const Cart = ({}: CartProps) => {
  return (
    <div className={styles.cartWrapper}>
      <div className={styles.cartImg}>
        <CartIcon />
        <div className={styles.cartBadge}>3</div>
      </div>

      <div className={styles.cartInfo}>
        Корзина
        <span className={styles.cartPrice}>12 478 ₸</span>
      </div>
    </div>
  );
};
