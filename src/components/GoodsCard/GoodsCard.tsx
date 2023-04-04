import { Button, GoodsCardElem, ProductSize } from 'components';
import { IProduct } from 'interfaces';
import { ReactComponent as CartIcon } from 'assets/cart.svg';
import { useAppDispatch } from 'app/hooks';
import { addToCart } from 'features/cart/cartSlice';

import styles from './GoodsCard.module.scss';
import { numberWithSpaces } from 'helpers/utils';

interface GoodsCardProps extends IProduct {}

export const GoodsCard = ({
  picSrc,
  title,
  sizeType,
  size,
  code,
  manufacturer,
  brand,
  price,
}: GoodsCardProps) => {
  const dispatch = useAppDispatch();

  const titleArr = title.split(' ');
  const titleWoFirstWord = titleArr.slice(1).join(' ');

  return (
    <li className={styles.goodsCard}>
      <img className={styles.goodsCardImage} src={picSrc} alt={title} />
      <ProductSize className={styles.goodsCardSize} {...{ sizeType, size }} />
      <div className={styles.goodsCardTitle}>
        <b>{titleArr[0]}</b> {titleWoFirstWord}
      </div>

      <div className={styles.goodsCardElems}>
        <GoodsCardElem title="Штрихкод" value={code} />
        <GoodsCardElem title="Производитель" value={manufacturer} />
        <GoodsCardElem title="Бренд" value={brand} />
      </div>

      <div className={styles.goodsCardFooter}>
        <div className={styles.goodsCardPrice}>{numberWithSpaces(price)}</div>
        <Button
          className={styles.goodsCardCartBtn}
          Icon={CartIcon}
          text="в корзину"
          size="sm"
          onClick={() =>
            dispatch(addToCart({ code, quantity: 1, priceEach: price }))
          }
        />
      </div>
    </li>
  );
};
