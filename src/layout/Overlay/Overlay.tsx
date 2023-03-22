import styles from './Overlay.module.css';

interface OverlayProps {}

export const Overlay = ({}: OverlayProps) => (
  <div className={styles.overlay}></div>
);
