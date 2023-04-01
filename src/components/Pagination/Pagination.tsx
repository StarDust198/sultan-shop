import { DetailedHTMLProps, HTMLAttributes } from 'react';
import cn from 'classnames';

import styles from './Pagination.module.scss';

const pages = 3;

interface PaginationProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const Pagination = ({ className, ...props }: PaginationProps) => {
  return <div className={cn(styles.pagination, className)} {...props}></div>;
};
