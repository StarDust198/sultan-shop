import { DetailedHTMLProps, HTMLAttributes } from 'react';
import cn from 'classnames';

import styles from './PriceFilter.module.scss';

interface PriceFilterProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  priceLow: string;
  setPriceLow: (str: string) => void;
  priceHigh: string;
  setPriceHigh: (str: string) => void;
}

export const PriceFilter = ({
  priceLow,
  setPriceLow,
  priceHigh,
  setPriceHigh,
  className,
  ...props
}: PriceFilterProps) => {
  return (
    <div className={cn(styles.priceFilter, className)} {...props}>
      <div className={styles.priceFilterTitle}>
        Цена <span>₸</span>
      </div>
      <input
        className={styles.priceFilterInput}
        type="text"
        name="price-low"
        value={priceLow}
        onChange={(e) => setPriceLow(e.target.value.replace(/\D/g, ''))}
      />
      <span className={styles.priceFilterSeparator}>-</span>
      <input
        className={styles.priceFilterInput}
        type="text"
        name="price-high"
        value={priceHigh}
        onChange={(e) => setPriceHigh(e.target.value.replace(/\D/g, ''))}
      />
    </div>
  );
};
