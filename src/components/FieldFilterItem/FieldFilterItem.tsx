import { DetailedHTMLProps, HTMLAttributes } from 'react';
import cn from 'classnames';

import styles from './FieldFilterItem.module.scss';

interface FieldFilterItemProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  title: string;
  quantity: number;
}

export const FieldFilterItem = ({
  title,
  quantity,
  className,
  ...props
}: FieldFilterItemProps) => {
  return (
    <div className={cn(styles.fieldFilterItem, className)}>
      <input
        className={styles.fieldFilterItemCheckbox}
        type="checkbox"
        name={`${title}Checkbox`}
        id={`${title}Checkbox`}
        {...props}
      />
      <label htmlFor={`${title}Checkbox`}></label>
      <span className={styles.fieldFilterItemTitle}>{title}</span>
      <span className={styles.fieldFilterItemQuantity}>{`(${quantity})`}</span>
    </div>
  );
};
