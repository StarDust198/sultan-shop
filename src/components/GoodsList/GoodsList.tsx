import { DetailedHTMLProps, HTMLAttributes } from 'react';
import cn from 'classnames';

import styles from './GoodsList.module.scss';
import { IProduct } from 'interfaces';
import { GoodsCard } from 'components';

interface GoodsListProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLUListElement>,
    HTMLUListElement
  > {
  cards: IProduct[];
}

export const GoodsList = ({ cards, className, ...props }: GoodsListProps) => {
  return (
    <ul className={cn(styles.goodsList, className)} {...props}>
      {cards.map((product) => (
        <GoodsCard key={product.code} {...product} />
      ))}
    </ul>
  );
};
