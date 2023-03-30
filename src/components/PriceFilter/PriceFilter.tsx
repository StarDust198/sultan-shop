import styles from './PriceFilter.module.scss';

interface PriceFilterProps {}

export const PriceFilter = ({}: PriceFilterProps) => (
  <div className={styles.priceFilter}>
    <div className={styles.priceFilterTitle}>
      Цена <span>₸</span>
    </div>
    <input className={styles.priceFilterInput} type="text" name="price-low" />
    <span className={styles.priceFilterSeparator}>-</span>
    <input className={styles.priceFilterInput} type="text" name="price-high" />
  </div>
);
