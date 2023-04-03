import { DetailedHTMLProps, HTMLAttributes } from 'react';
import cn from 'classnames';

import styles from './CartItem.module.scss';

interface CartItemProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const CartItem = ({ className, ...props }: CartItemProps) => {
  return (
    <div className={cn(styles.cartItem, className)} {...props}>
      CartItem Component
    </div>
  );
};
