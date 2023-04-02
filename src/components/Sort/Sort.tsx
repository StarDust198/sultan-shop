import { useState, Fragment, DetailedHTMLProps, HTMLAttributes } from 'react';
import cn from 'classnames';

import { ReactComponent as SortIcon } from 'assets/sort.svg';

import styles from './Sort.module.scss';
import { SortDirection } from 'interfaces';

interface SortProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLFormElement>, HTMLFormElement> {
  options: string[];
  option: number;
  setOption: (num: number) => void;
  direction: SortDirection;
  switchDirection: () => void;
}

export const Sort = ({
  options,
  option,
  setOption,
  direction,
  switchDirection,
  className,
  ...props
}: SortProps) => {
  const [open, setOpen] = useState(false);
  const switchActive = () => {
    setOpen((open) => !open);
  };

  const handleSelectClick = (index: number) => {
    setOption(index);
    setOpen(false);
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
          {options[option]}
        </div>
        <div className={styles.sortSelectContent}>
          {options.map((optionName, i) => (
            <Fragment key={i}>
              <input
                id={`select${i}`}
                className={styles.sortSelectInput}
                type="radio"
                name="select"
                defaultChecked={optionName === options[option]}
              />
              <label
                htmlFor={`select${i}`}
                tabIndex={0}
                className={styles.sortSelectLabel}
                onClick={() => handleSelectClick(i)}
              >
                {options[i]}
              </label>
            </Fragment>
          ))}
        </div>
      </div>

      <input
        className={styles.sortDirectionInput}
        type="checkbox"
        id="direction"
        onChange={switchDirection}
        checked={direction === 'up'}
      />
      <label className={styles.sortDirectionLabel} htmlFor="direction">
        <SortIcon className={styles.sortIcon} />
      </label>
    </form>
  );
};
