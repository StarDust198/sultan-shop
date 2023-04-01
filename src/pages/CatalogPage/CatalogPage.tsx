import {
  FilterPanel,
  GoodsList,
  PageRoute,
  PageTitle,
  Sort,
  TabList,
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
        <TabList className={styles.catalogPageTabs} mode="cards" />
        <FilterPanel className={styles.catalogPageFilters} />

        <TabList className={styles.catalogPageLinks} mode="links" />
        <GoodsList className={styles.catalogPageCardList} cards={cards} />
      </div>
    </Layout>
  );
};
