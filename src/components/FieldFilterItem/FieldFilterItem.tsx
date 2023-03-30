import styles from './FieldFilterItem.module.scss';

interface FieldFilterItemProps {
  title: string;
  quantity: number;
}

export const FieldFilterItem = ({ title, quantity }: FieldFilterItemProps) => (
  <div className={styles.fieldFilterItem}>
    <input
      className={styles.fieldFilterItemCheckbox}
      type="checkbox"
      name={`${title}Checkbox`}
      id={`${title}Checkbox`}
    />
    <label htmlFor={`${title}Checkbox`}></label>
    <span className={styles.fieldFilterItemTitle}>{title}</span>
    <span className={styles.fieldFilterItemQuantity}>{`(${quantity})`}</span>
  </div>
);
