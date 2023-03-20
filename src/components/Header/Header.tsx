import styles from './Header.module.scss';

interface HeaderProps {}

export const Header = ({}: HeaderProps) => (
  <div className={styles.header}>Header Component</div>
);
