import {
  CategoryLinks,
  FilterPanel,
  GoodsCard,
  PageRoute,
  PageTitle,
  Sort,
  Tabs,
} from 'components';

import { Layout } from 'layout/Layout';
import db from 'db/goods.json';
import { IProduct } from 'interfaces';

import styles from './CatalogPage.module.scss';

interface CatalogPageProps {}

export const CatalogPage = ({}: CatalogPageProps) => {
  const cards: IProduct[] = db as IProduct[];

  return (
    <Layout>
      <div className={styles.catalogPage}>
        <PageRoute
          className={styles.catalogPageRoute}
          routes={['Главная', 'Косметика и гигиена']}
        />
        <PageTitle
          className={styles.catalogPageTitle}
          title="Косметика и гигиена"
        />
        <Sort className={styles.catalogPageSort} />
        <Tabs className={styles.catalogPageTabs} />
        <div className={styles.catalogPageMenu}>
          <FilterPanel />
          <CategoryLinks />
        </div>
        <div className={styles.catalogPageCardsList}>
          {cards.map((card) => (
            <GoodsCard {...card} />
          ))}
        </div>
      </div>
    </Layout>
  );
};
