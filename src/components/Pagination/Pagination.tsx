import { DetailedHTMLProps, HTMLAttributes } from 'react';
import cn from 'classnames';

import { ReactComponent as ArrowIcon } from 'assets/arrow.svg';
import styles from './Pagination.module.scss';

interface PaginationProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  activePage: number;
  cardsPerPage?: number;
  totalCards: number;
}

export const Pagination = ({
  activePage,
  cardsPerPage = 15,
  totalCards,
  className,
  ...props
}: PaginationProps) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalCards / cardsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className={cn(styles.pagination, className)} {...props}>
      <button className={cn(styles.paginationBtn, styles.paginationPrev)}>
        <ArrowIcon />
      </button>
      <ul className={styles.paginationList}>
        {pageNumbers.map((pageNumber) => (
          <li
            className={cn(styles.paginationItem, {
              [styles.active]: activePage === pageNumber,
            })}
            key={pageNumber}
          >
            <a href="!#">{pageNumber}</a>
          </li>
        ))}
      </ul>
      <button className={cn(styles.paginationBtn, styles.paginationNext)}>
        <ArrowIcon />
      </button>
    </nav>
  );
};
