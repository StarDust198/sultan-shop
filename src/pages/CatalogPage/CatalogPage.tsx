import { useEffect, useState } from 'react';
import { useAppSelector, useAppDispatch } from 'app/hooks';

import {
  loadProducts,
  selectSortedFilteredProducts,
  setSort,
} from 'features/products/productsSlice';
import {
  FilterPanel,
  GoodsList,
  BreadCrumbs,
  PageTitle,
  Pagination,
  Sort,
  TabList,
} from 'components';
import { SortDirection, SortEnum } from 'interfaces';

import styles from './CatalogPage.module.scss';

// interface CatalogPageProps {}

export const CatalogPage = () => {
  const [option, setOption] = useState<SortEnum>(0);
  const [direction, setDirection] = useState<SortDirection>('down');
  const [currentPage, setCurrentPage] = useState(0);

  const products = useAppSelector(selectSortedFilteredProducts);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setSort({ field: option, direction }));
  }, [direction, option]);

  const switchDirection = () => {
    setDirection((direction) => (direction === 'up' ? 'down' : 'up'));
  };

  return (
    <div className={styles.catalogPage}>
      <BreadCrumbs
        className={styles.catalogPageRoute}
        routes={['Главная', 'Косметика и гигиена']}
      />

      <PageTitle
        className={styles.catalogPageTitle}
        title="Косметика и гигиена"
      />

      <Sort
        className={styles.catalogPageSort}
        options={['Название', 'Цена']}
        option={option}
        setOption={setOption}
        direction={direction}
        switchDirection={switchDirection}
      />

      <TabList className={styles.catalogPageTabs} mode="cards" />

      <FilterPanel className={styles.catalogPageFilters} />

      <TabList className={styles.catalogPageLinks} mode="links" />

      <GoodsList
        className={styles.catalogPageCardList}
        cards={products.slice(currentPage * 15, currentPage * 15 + 15)}
      />

      <Pagination
        className={styles.catalogPagePagination}
        activePage={currentPage}
        setActivePage={setCurrentPage}
        totalCards={products.length}
      />

      <p className={styles.catalogPageDescription}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati
        eaque, voluptatibus debitis ducimus esse odio nulla dolor sunt optio
        aliquam eveniet qui deserunt non. Neque vel voluptate illo tempore
        minus!
      </p>
    </div>
  );
};
