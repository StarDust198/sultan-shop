import { DetailedHTMLProps, HTMLAttributes } from 'react';
import cn from 'classnames';

import styles from './PageRoute.module.scss';

interface PageRouteProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  routes: string[];
}

export const PageRoute = ({ routes, className, ...props }: PageRouteProps) => (
  <div className={cn(styles.pageRoute, className)} {...props}>
    {routes.map((route) => (
      <div key={route}>{route}</div>
    ))}
  </div>
);
