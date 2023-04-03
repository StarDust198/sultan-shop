import { DetailedHTMLProps, HTMLAttributes } from 'react';
import cn from 'classnames';

import styles from './CartPage.module.scss';
import { BreadCrumbs, PageTitle } from 'components';

interface CartPageProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const CartPage = (props: CartPageProps) => {
  return (
    <div className={styles.cartPage} {...props}>
      <BreadCrumbs
        className={styles.productPageCrumbs}
        routes={['Главная', 'Корзина']}
      />
      <PageTitle title="Корзина" />
    </div>
  );
};
