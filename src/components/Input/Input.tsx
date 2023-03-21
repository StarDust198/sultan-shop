import cn from 'classnames';

import { ReactComponent as SearchIcon } from './search.svg';
import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { ReactComponent as ArrowIcon } from './arrow.svg';

import styles from './Input.module.css';

interface InputProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  type?: 'search' | 'submit';
}

export const Input = ({ type = 'search', className, ...props }: InputProps) => (
  <div className={cn(styles.inputDiv, className)} {...props}>
    <input
      className={styles.input}
      type="text"
      placeholder={type === 'search' ? 'Поиск...' : 'Введите ваш E-mail'}
    />
    <button className={styles.button}>
      {type === 'search' ? (
        <SearchIcon className={styles.icon} />
      ) : (
        <ArrowIcon className={styles.icon} />
      )}
    </button>
  </div>
);
