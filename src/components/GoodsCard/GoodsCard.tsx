import { Button, GoodsCardElem } from 'components';
import { IProduct } from 'interfaces';
import { ReactComponent as VolumeIcon } from 'assets/volume.svg';
import { ReactComponent as WeightIcon } from 'assets/weight.svg';
import { ReactComponent as CartIcon } from 'assets/cart.svg';

import styles from './GoodsCard.module.scss';

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
  const titleArr = title.split(' ');
  const titleWoFirstWord = titleArr.slice(1).join(' ');

  return (
    <li className={styles.goodsCard}>
      <img className={styles.goodsCardImage} src={picSrc} alt={title} />
      <div className={styles.goodsCardSize}>
        {sizeType === 'weight' ? <WeightIcon /> : <VolumeIcon />}
        <span>{size}</span>
      </div>
      <div className={styles.goodsCardTitle}>
        <b>{titleArr[0]}</b> {titleWoFirstWord}
      </div>

      <div className={styles.goodsCardElems}>
        <GoodsCardElem title="Штрихкод" value={code} />
        <GoodsCardElem title="Производитель" value={manufacturer} />
        <GoodsCardElem title="Бренд" value={brand} />
      </div>

      <div className={styles.goodsCardFooter}>
        <div className={styles.goodsCardPrice}>{price}</div>
        <Button
          className={styles.goodsCardCartBtn}
          Icon={CartIcon}
          text="в корзину"
          size="sm"
        ></Button>
      </div>
    </li>
  );
};
