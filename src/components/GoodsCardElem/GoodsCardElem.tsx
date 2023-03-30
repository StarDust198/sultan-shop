import styles from './GoodsCardElem.module.scss';

interface GoodsCardElemProps {
  title: string;
  value: string | number;
}

export const GoodsCardElem = ({ title, value }: GoodsCardElemProps) => (
  <div className={styles.goodsCardElem}>
    <span className={styles.goodsCardElemTitle}>{title}</span>
    <span className={styles.goodsCardElemValue}>{value}</span>
  </div>
);
