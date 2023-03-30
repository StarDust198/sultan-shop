import styles from './CategoryLinks.module.scss';

interface CategoryLinksProps {}

export const CategoryLinks = ({}: CategoryLinksProps) => (
  <div className={styles.categoryLinks}>
    <ul className={styles.categoryLinksList}>
      <li className={styles.categoryLinksItem}>
        <a href="#" className={styles.categoryLinksLink}>
          Уход за лицом
        </a>
      </li>
    </ul>
  </div>
);
