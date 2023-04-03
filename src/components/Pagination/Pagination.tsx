import { DetailedHTMLProps, HTMLAttributes } from 'react';
import cn from 'classnames';

import { ReactComponent as ArrowIcon } from 'assets/arrow.svg';
import styles from './Pagination.module.scss';

interface PaginationProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  activePage: number;
  cardsPerPage?: number;
  totalCards: number;
  setActivePage: (num: number) => void;
}

export const Pagination = ({
  activePage,
  cardsPerPage = 15,
  totalCards,
  className,
  setActivePage,
  ...props
}: PaginationProps) => {
  const pageNumbers = [];

  const totalPages = Math.ceil(totalCards / cardsPerPage);
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className={cn(styles.pagination, className)} {...props}>
      <button
        className={cn(styles.paginationBtn, styles.paginationPrev)}
        onClick={() =>
          activePage !== 0 ? setActivePage(activePage - 1) : null
        }
      >
        <ArrowIcon />
      </button>
      <ul className={styles.paginationList}>
        {pageNumbers.map((pageNumber, index) => (
          <li
            className={cn(styles.paginationItem, {
              [styles.active]: activePage === index,
            })}
            key={pageNumber}
          >
            <a href="!#" onClick={() => setActivePage(index)}>
              {pageNumber}
            </a>
          </li>
        ))}
      </ul>
      <button
        className={cn(styles.paginationBtn, styles.paginationNext)}
        onClick={() =>
          activePage !== totalPages - 1 ? setActivePage(activePage + 1) : null
        }
      >
        <ArrowIcon />
      </button>
    </nav>
  );
};
