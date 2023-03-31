import { DetailedHTMLProps, HTMLAttributes } from 'react';
import cn from 'classnames';

import styles from './PageTitle.module.scss';

interface PageTitleProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  title: string;
}

export const PageTitle = ({ title, className, ...props }: PageTitleProps) => (
  <h1 className={cn(styles.pageTitle, className)} {...props}>
    {title}
  </h1>
);
