import { DetailedHTMLProps, HTMLAttributes } from 'react';
import cn from 'classnames';

import { Button, FieldFilter, PriceFilter } from 'components';
import { ReactComponent as TrashIcon } from 'assets/trash.svg';

import styles from './FilterPanel.module.scss';

interface FilterPanelProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const FilterPanel = ({ className, ...props }: FilterPanelProps) => (
  <div className={cn(styles.filterPanel, className)} {...props}>
    <h3 className={styles.filterPanelTitle}>ПОДБОР ПО ПАРАМЕТРАМ</h3>
    <PriceFilter />
    <FieldFilter />
    <div className={styles.filterPanelButtons}>
      <Button text="Показать" />
      <Button size="round" Icon={TrashIcon} />
    </div>
  </div>
);
