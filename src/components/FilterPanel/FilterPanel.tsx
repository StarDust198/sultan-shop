import { CategoryLinks, FieldFilter, PriceFilter } from 'components';

import styles from './FilterPanel.module.scss';

interface FilterPanelProps {}

export const FilterPanel = ({}: FilterPanelProps) => (
  <div className={styles.filterPanel}>
    <h3 className={styles.filterPanelTitle}>ПОДБОР ПО ПАРАМЕТРАМ</h3>
    <PriceFilter />
    <FieldFilter />
  </div>
);
