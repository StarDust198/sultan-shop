import cn from 'classnames';

import { ReactComponent as SearchIcon } from 'assets/search.svg';
import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { ReactComponent as ArrowIcon } from 'assets/arrow.svg';

import styles from './Input.module.scss';

interface InputProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  type?: 'search' | 'submit';
}

export const Input = ({ type = 'search', className, ...props }: InputProps) => (
  <div className={cn(styles.input, className)} {...props}>
    <input
      className={styles.inputField}
      type="text"
      placeholder={type === 'search' ? 'Поиск...' : 'Введите ваш E-mail'}
    />
    <button className={styles.inputButton}>
      {type === 'search' ? (
        <SearchIcon className={styles.inputIcon} />
      ) : (
        <ArrowIcon className={styles.inputIcon} />
      )}
    </button>
  </div>
);
