import { useState, Fragment, DetailedHTMLProps, HTMLAttributes } from 'react';
import cn from 'classnames';

import { ReactComponent as SortIcon } from 'assets/sort.svg';

import styles from './Sort.module.scss';

interface SortProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLFormElement>, HTMLFormElement> {
  options?: string[];
}

export const Sort = ({
  options = ['Название', 'Цена'],
  className,
  ...props
}: SortProps) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(0);
  const [direction, setDirection] = useState<'up' | 'down'>('down');

  const switchActive = () => {
    setOpen((open) => !open);
  };

  const handleSelectClick = (index: number) => {
    setSelected(index);
    setOpen(false);
  };

  const handleCheckboxClick = () => {
    setDirection((direction) => (direction === 'up' ? 'down' : 'up'));
  };

  return (
    <form name="sort" className={cn(styles.sort, className)} {...props}>
      <div className={styles.sortTitle}>Сортировка:</div>
      <div
        className={cn(styles.sortSelect, {
          [styles.sortSelectOpen]: open,
        })}
      >
        <div className={styles.sortSelectTitle} onClick={switchActive}>
          {options[selected]}
        </div>
        <div className={styles.sortSelectContent}>
          {options.map((option, i) => (
            <Fragment key={i}>
              <input
                id={`select${i}`}
                className={styles.sortSelectInput}
                type="radio"
                name="select"
                defaultChecked={i === selected}
              />
              <label
                htmlFor={`select${i}`}
                tabIndex={0}
                className={styles.sortSelectLabel}
                onClick={() => handleSelectClick(i)}
              >
                {option}
              </label>
            </Fragment>
          ))}
        </div>
      </div>

      <input
        className={styles.sortDirectionInput}
        type="checkbox"
        id="direction"
        onChange={handleCheckboxClick}
      />
      <label className={styles.sortDirectionLabel} htmlFor="direction">
        <SortIcon className={styles.sortIcon} />
      </label>
    </form>
  );
};
