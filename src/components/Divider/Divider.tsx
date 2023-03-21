import { DetailedHTMLProps, HTMLAttributes } from 'react';
import cn from 'classnames';

import styles from './Divider.module.css';

interface DividerProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLHRElement>, HTMLHRElement> {
  angle?: 'horizontal' | 'vertical';
}

export const Divider = ({
  angle = 'horizontal',
  className,
  ...props
}: DividerProps) => (
  <hr
    className={cn(styles.divider, className, {
      [styles.vertical]: angle === 'vertical',
    })}
    {...props}
  />
);
