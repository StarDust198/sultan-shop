import { DetailedHTMLProps, HTMLAttributes } from 'react';
import cn from 'classnames';

import { ReactComponent as TrashIcon } from 'assets/trash.svg';
import styles from './CartItem.module.scss';
import { IProduct } from 'interfaces';
import {
  Button,
  Divider,
  ProductPrice,
  ProductQuantity,
  ProductSize,
} from 'components';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import {
  deleteFromCart,
  // selectCartItemQuantity,
  setCartItemQuantity,
} from 'features/cart/cartSlice';
import { selectProductByCode } from 'features/products/productsSlice';

interface CartItemProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  code: number;
  quantity: number;
}

export const CartItem = ({
  code,
  quantity,
  className,
  ...props
}: CartItemProps) => {
  const dispatch = useAppDispatch();
  const product: IProduct | undefined = useAppSelector((state) =>
    selectProductByCode(state, code)
  );

  if (!product) return null;

  const { picSrc, size, sizeType, description, price, title } = product;

  return (
    <div className={cn(styles.cartItem, className)} {...props}>
      <img className={styles.cartItemImg} src={picSrc} alt={title} />
      <div className={styles.cartItemInfo}>
        <ProductSize {...{ sizeType, size }} />
        <h3 className={styles.cartItemTitle}>{title}</h3>
        <p className={styles.cartItemDescription}>{description}</p>
      </div>
      <Divider angle="vertical" />
      <ProductQuantity
        quantity={quantity}
        setQuantity={(quantity: number) =>
          dispatch(setCartItemQuantity({ code, priceEach: price, quantity }))
        }
      />
      <Divider angle="vertical" />
      <ProductPrice price={price * quantity} />
      <Divider angle="vertical" />
      <Button
        size="round"
        Icon={TrashIcon}
        onClick={() => dispatch(deleteFromCart(code))}
      />
    </div>
  );
};
