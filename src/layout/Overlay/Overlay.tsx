import styles from './Overlay.module.scss';

interface OverlayProps {}

export const Overlay = ({}: OverlayProps) => (
  <div className={styles.overlay}></div>
);
