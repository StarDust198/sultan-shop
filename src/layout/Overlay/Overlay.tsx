import { DetailedHTMLProps, HTMLAttributes } from 'react';
import cn from 'classnames';
import styles from './Overlay.module.scss';

interface OverlayProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const Overlay = ({ className, ...props }: OverlayProps) => (
  <div className={cn(styles.overlay, className)} {...props}></div>
);
