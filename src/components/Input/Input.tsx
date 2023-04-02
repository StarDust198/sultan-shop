import { DetailedHTMLProps, HTMLAttributes, useRef } from 'react';
import cn from 'classnames';

import { ReactComponent as SearchIcon } from 'assets/search.svg';
import { ReactComponent as ArrowIcon } from 'assets/arrow.svg';

import styles from './Input.module.scss';

interface InputProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  type?: 'search' | 'submit';
  transparent?: boolean;
  sendValue?: (str: string) => void;
}

export const Input = ({
  type = 'search',
  transparent = false,
  className,
  sendValue,
  onChange,
  ...props
}: InputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const submitValue = () => {
    if (!inputRef.current || !sendValue) return;
    sendValue(inputRef.current.value);
  };

  return (
    <div
      className={cn(styles.input, className, {
        [styles.inputTransparent]: transparent,
      })}
      {...props}
    >
      <input
        className={styles.inputField}
        type="text"
        ref={inputRef}
        placeholder={type === 'search' ? 'Поиск...' : 'Введите ваш E-mail'}
      />
      <button className={styles.inputButton} onClick={submitValue}>
        {type === 'search' ? (
          <SearchIcon className={styles.inputIcon} />
        ) : (
          <ArrowIcon className={styles.inputIcon} />
        )}
      </button>
    </div>
  );
};
