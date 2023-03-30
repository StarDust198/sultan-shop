import styles from './PageTitle.module.scss';

interface PageTitleProps {
  title: string;
}

export const PageTitle = ({ title }: PageTitleProps) => (
  <h1 className={styles.pageTitle}>{title}</h1>
);
