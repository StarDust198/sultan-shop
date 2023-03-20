import styles from './Container.module.scss';

interface ContainerProps {}

export const Container = ({}: ContainerProps) => (
  <div className={styles.container}>Container Component</div>
);
