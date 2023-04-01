import { useState } from 'react';
import cn from 'classnames';

import { FieldFilterItem, Input } from 'components';
import { ReactComponent as SortIcon } from 'assets/sort.svg';

import styles from './FieldFilter.module.scss';

interface FieldFilterProps {}

const fieldFilterDB = [
  { title: 'Grifon', quantity: 56 },
  { title: 'Boyscout', quantity: 66 },
  { title: 'Paclan', quantity: 66 },
  { title: 'Булгари Грин', quantity: 21 },
  { title: 'Просто Грин', quantity: 121 },
  { title: 'Абракадабра', quantity: 281 },
];

export const FieldFilter = ({}: FieldFilterProps) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={styles.fieldFilter}>
      <h5 className={styles.fieldFilterTitle}>Производитель</h5>
      <Input className={styles.fieldFilterSearch} type="search" />
      <div className={styles.fieldFilterItems}>
        {fieldFilterDB.map((ffItem, i) =>
          i < 4 || expanded ? (
            <FieldFilterItem
              key={ffItem.title}
              title={ffItem.title}
              quantity={ffItem.quantity}
            />
          ) : null
        )}
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
