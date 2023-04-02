import { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import cn from 'classnames';

import styles from './FieldFilterItem.module.scss';

interface FieldFilterItemProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  title: string;
  quantity: number;
}

export const FieldFilterItem = ({
  title,
  quantity,
  className,
  checked,
  ...props
}: FieldFilterItemProps) => {
  return (
    <div className={cn(styles.fieldFilterItem, className)}>
      <input
        className={styles.fieldFilterItemCheckbox}
        type="checkbox"
        name={`${title}Checkbox`}
        id={`${title}Checkbox`}
        checked={checked}
        {...props}
      />
      <label htmlFor={`${title}Checkbox`}></label>
      <span className={styles.fieldFilterItemTitle}>{title}</span>
      <span className={styles.fieldFilterItemQuantity}>{`(${quantity})`}</span>
    </div>
  );
};
