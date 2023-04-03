import { DetailedHTMLProps, HTMLAttributes, useState } from 'react';
import cn from 'classnames';
import { useAppSelector, useAppDispatch } from 'app/hooks';

import { selectProductByCode } from 'features/products/productsSlice';
import { ReactComponent as CartIcon } from 'assets/cart.svg';
import { ReactComponent as ShareIcon } from 'assets/share.svg';
import { ReactComponent as DownloadIcon } from 'assets/download.svg';
import {
  BreadCrumbs,
  Button,
  GoodsCardElem,
  ProductPrice,
  ProductQuantity,
  ProductSize,
} from 'components';

import styles from './ProductPage.module.scss';

interface ProductPageProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const ProductPage = ({ className, ...props }: ProductPageProps) => {
  const product = useAppSelector((state) =>
    selectProductByCode(state, 4605559097585)
  );
  const [quantity, setQuantity] = useState(0);

  if (!product) return <h1>404 продукт не найден в базе</h1>;

  const {
    title,
    brand,
    code,
    description,
    manufacturer,
    picSrc,
    price,
    sizeType,
    size,
  } = product;
  const titleArr = title.split(' ');
  const titleWoFirstWord = titleArr.slice(1).join(' ');

  return (
    <div className={styles.productPage} {...props}>
      <BreadCrumbs
        className={styles.productPageCrumbs}
        routes={['Главная', 'Косметика и гигиена']}
      />
      <img className={styles.productPageImage} src={picSrc} alt={title} />
      <div className={styles.productPageInfo}>
        <div className={styles.productPageAvailable}>В наличии</div>
        <h1 className={styles.productPageTitle}>
          <b>{titleArr[0]}</b> {titleWoFirstWord}
        </h1>
        <ProductSize
          className={styles.productPageSize}
          size={size}
          sizeType={sizeType}
        />
        <div className={styles.productPageOrder}>
          <ProductPrice className={styles.productPagePrice} price={price} />
          <ProductQuantity quantity={quantity} setQuantity={setQuantity} />
          <Button
            className={styles.goodsCardCartBtn}
            Icon={CartIcon}
            text="В корзину"
          />
        </div>
        <div className={styles.productPageMisc}>
          <div className={styles.productPageShare}>
            <ShareIcon />
          </div>
          <div className={styles.productPageAdv}>
            При покупке от <b>10 000 ₸</b> бесплатная доставка по Кокчетаву и
            области
          </div>
          <div className={styles.productPagePriceList}>
            <span>Прайс&#8209;лист</span>
            <DownloadIcon />
          </div>
        </div>
        <div className={styles.productPageDetails}>
          <GoodsCardElem title="Производитель" value={manufacturer} />
          <GoodsCardElem title="Брэнд" value={brand} />
          <GoodsCardElem title="Артикул" value={code} />
          <GoodsCardElem title="Штрихкод" value={code} />
        </div>
        <div className={styles.productPageDescriptionTitle}>Описание</div>
        <p className={styles.productPageDescription}>{description}</p>
      </div>
    </div>
  );
};
