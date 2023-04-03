import { DetailedHTMLProps, HTMLAttributes } from 'react';
import cn from 'classnames';

import styles from './CartPage.module.scss';

interface CartPageProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const CartPage = ({ className, ...props }: CartPageProps) => {
  return (
    <div className={cn(styles.cartPage, className)} {...props}>
      CartPage Component
    </div>
  );
};
