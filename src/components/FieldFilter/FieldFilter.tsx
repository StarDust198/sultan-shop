import { useState } from 'react';
import cn from 'classnames';

import { FieldFilterItem, Input } from 'components';
import { ReactComponent as SortIcon } from 'assets/sort.svg';

import styles from './FieldFilter.module.scss';
import { set } from 'immer/dist/internal';

interface FieldFilterProps {}

export const FieldFilter = ({}: FieldFilterProps) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={styles.fieldFilter}>
      <h5 className={styles.fieldFilterTitle}>Производитель</h5>
      <Input className={styles.fieldFilterSearch} type="search" />
      <div className={styles.fieldFilterItems}>
        <FieldFilterItem title="Grifon" quantity={56} />
        <FieldFilterItem title="Boyscout" quantity={66} />
        <FieldFilterItem title="Paclan" quantity={166} />
        <FieldFilterItem title="Булгари Грин" quantity={21} />
      </div>
      <div
        onClick={() => setExpanded((expanded) => !expanded)}
        className={cn(styles.fieldFilterExpand, {
          [styles.expanded]: expanded,
        })}
      >
        <span>{expanded ? 'Скрыть все' : 'Показать все'}</span>
        <SortIcon />
      </div>
    </div>
  );
};
