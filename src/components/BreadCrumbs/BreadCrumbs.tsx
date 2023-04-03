import { DetailedHTMLProps, HTMLAttributes } from 'react';
import cn from 'classnames';

import styles from './BreadCrumbs.module.scss';

interface BreadCrumbsProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  routes: string[];
}

export const BreadCrumbs = ({
  routes,
  className,
  ...props
}: BreadCrumbsProps) => (
  <div className={cn(styles.breadCrumbs, className)} {...props}>
    {routes.map((route) => (
      <div key={route}>{route}</div>
    ))}
  </div>
);
