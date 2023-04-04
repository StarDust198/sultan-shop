import { DetailedHTMLProps, HTMLAttributes, useEffect, useState } from 'react';
import cn from 'classnames';

import styles from './CartPage.module.scss';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import {
  BreadCrumbs,
  Button,
  CartItem,
  PageTitle,
  ProductPrice,
  ThanksMessage,
} from 'components';
import {
  clearCart,
  selectCartProducts,
  selectCartTotalPrice,
} from 'features/cart/cartSlice';
import { Overlay } from 'layout/Overlay/Overlay';

interface CartPageProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const CartPage = (props: CartPageProps) => {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector(selectCartProducts);
  const totalPrice = useAppSelector(selectCartTotalPrice);
  const [showThanks, setShowThanks] = useState(false);

  useEffect(() => {
    if (!showThanks) return;

    const timer = setTimeout(() => {
      console.log('effect');
      setShowThanks(false);
      clearTimeout(timer);
    }, 3000);
  }, [showThanks]);

  const showThanksMessage = () => {
    setShowThanks(true);
    dispatch(clearCart());
  };

  return (
    <div className={styles.cartPage} {...props}>
      <BreadCrumbs
        className={styles.productPageCrumbs}
        routes={['Главная', 'Корзина']}
      />
      <PageTitle className={styles.cartPageTitle} title="Корзина" />

      {Object.entries(cartItems).map((item) =>
        item[1].quantity > 0 ? (
          <CartItem code={+item[0]} quantity={item[1].quantity} />
        ) : null
      )}

      <div className={styles.cartPageOrder}>
        <Button text="Оформить заказ" onClick={showThanksMessage} />
        <ProductPrice price={totalPrice} />
      </div>

      {showThanks && (
        <>
          <Overlay onClick={() => setShowThanks(false)} />
          <ThanksMessage />
        </>
      )}
    </div>
  );
};
