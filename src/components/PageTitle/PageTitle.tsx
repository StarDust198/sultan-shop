import styles from './PageTitle.module.scss';

interface PageTitleProps {}

export const PageTitle = ({}: PageTitleProps) => (
  <div className={styles.pageTitle}>PageTitle Component</div>
);
