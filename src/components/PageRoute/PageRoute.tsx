import styles from './PageRoute.module.scss';

interface PageRouteProps {
  routes: string[];
}

export const PageRoute = ({ routes }: PageRouteProps) => (
  <div className={styles.pageRoute}>
    {routes.map((route) => (
      <div key={route}>{route}</div>
    ))}
  </div>
);
